import React from 'react';
import { connect } from 'react-redux';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import PreloaderComponent from '../preloader/preloader.jsx';

import Validators from '../../validators/validators.js';

import { employeesCommActions, employeesActions, departmentsCommActions, departmentsActions } from '../../actions/actions';

class EmployeesComponent extends React.Component {
	constructor(props) {
		super(props);

		this.addNewEmployee = this.addNewEmployee.bind(this);
		this.deleteEmployees = this.deleteEmployees.bind(this);
		this.onBeforeSaveCell = this.onBeforeSaveCell.bind(this);
		this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
	}

	employeesRequest() {
		const { dispatch } = this.props;
		dispatch(employeesCommActions.get());
	}

	departmentsRequest() {
		const { dispatch } = this.props;
		dispatch(departmentsCommActions.get());
	}


	addNewEmployee(employee) {
		const { employees } = this.props.employees,
			{ dispatch } = this.props;

		if (employees.length !== 0) {
			employee.id = employees[employees.length - 1].id + 1;
		} else {
			employee.id = 0;
		}
		
		employee.departmentId = parseInt(employee.departmentId);

		dispatch(employeesActions.add(employee));
	}

	deleteEmployees(employees) {
		const { dispatch } = this.props;
		dispatch(employeesActions.deleteSeveral(employees));
	}

	onBeforeSaveCell(row, cellName, cellValue) {
		let valid = true;
		if (cellName === 'name') {
			valid = Validators.stringValidator(cellValue, row)
		}
		return valid;
	}

	onAfterSaveCell(row, cellName, cellValue) {
		const { dispatch } = this.props;
		row.id = parseInt(row.id);
		row.departmentId = parseInt(row.departmentId);
		dispatch(employeesActions.update(row));
	}

	renderEmployeesTable() {

		const { employees } = this.props.employees,
			{ departments } = this.props;

		const options = {
			afterInsertRow: this.addNewEmployee,
			afterDeleteRow: this.deleteEmployees
		},
			selectRowProp = {
				mode: 'checkbox'
			},
			cellEditProp = {
				mode: 'dbclick',
				blurToSave: true,
				beforeSaveCell: this.onBeforeSaveCell,
				afterSaveCell: this.onAfterSaveCell
			},
			stringColumn = {
				validator: Validators.stringValidator
			},
			departmentIdColumn = {
				type: 'select',
				options: {
					values: departments.getIds()
				},
				validator: Validators.numberValidator
			};

		return (

			<div className="content-box-large">
				<div className="panel-heading">
					<div className="panel-title">Employees Table</div>

				</div>
				<div className="panel-options">
					<BootstrapTable data={employees} striped={true} hover={true} pagination={true} insertRow={true} deleteRow={true} cellEdit={cellEditProp} selectRow={selectRowProp} options={options}>
						<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true} autoValue={true}>Employee ID</TableHeaderColumn>
						<TableHeaderColumn dataField="firstName" dataSort={true} editable={stringColumn}>First Name</TableHeaderColumn>
						<TableHeaderColumn dataField="lastName" dataSort={true} editable={stringColumn}>Last Name</TableHeaderColumn>
						<TableHeaderColumn dataField="departmentId" dataAlign="center" dataSort={true} editable={departmentIdColumn}>Department ID</TableHeaderColumn>
					</BootstrapTable>
				</div>

			</div>
		);
	}

	renderPreloader() {
		const { employeeGetSuccess, employeeGetRequest } = this.props.connections;

		return (<PreloaderComponent show={!employeeGetSuccess || employeeGetRequest} />);
	}

	componentWillUpdate(nextProps, nextState) {
	}

	componentWillMount() {
		const { dispatch } = this.props;
		switch (this.props.location.pathname) {
			case '/':
				dispatch({ type: 'SET_DEFAULT_PAGE', payload: null })
				break;
			case '/dep':
				dispatch({ type: 'SET_DEPARTMENT_PAGE', payload: null })
				break;
			case '/emp':
				dispatch({ type: 'SET_EMPLOYEE_PAGE', payload: null })
				break;
		}
	}

	componentWillUnmount() {
	}

	componentDidMount() {
		const { employeeGetSuccess } = this.props.connections,
			{ departmentGetSuccess } = this.props.connections;

		if (!employeeGetSuccess) {
			this.employeesRequest();
		}

		if (!departmentGetSuccess) {
			this.departmentsRequest();
		}
	}

	render() {
		return (
			<div className="col-md-12">
				{this.renderPreloader()}
				{this.renderEmployeesTable()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(EmployeesComponent);