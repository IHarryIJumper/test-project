// import React from 'react';
import { connect } from 'react-redux';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import PreloaderComponent from '../preloader/preloader.jsx';

import Validators from '../../validators/validators.js';

import { departmentsCommActions, departmentsActions } from '../../actions/actions';

class DepartmentsComponent extends React.Component {
	constructor(props) {
		super(props);

		this.addNewDepartment = this.addNewDepartment.bind(this);
		this.deleteDepartments = this.deleteDepartments.bind(this);
		this.onBeforeSaveCell = this.onBeforeSaveCell.bind(this);
		this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
	}

	departmentsRequest() {
		const { dispatch } = this.props;
		dispatch(departmentsCommActions.get());
	}

	addNewDepartment(department) {
		const { departments } = this.props.departments,
			{ dispatch } = this.props;

		if (departments.length !== 0) {
			department.id = departments[departments.length - 1].id + 1;
		} else {
			department.id = 0;
		}

		dispatch(departmentsActions.add(department));
	}

	deleteDepartments(departments) {
		const { dispatch } = this.props;
		dispatch(departmentsActions.deleteSeveral(departments));
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
		dispatch(departmentsActions.update(row));
	}

	renderDepartmentsTable() {

		const { departments } = this.props.departments;

		const options = {
			afterInsertRow: this.addNewDepartment,
			afterDeleteRow: this.deleteDepartments
		},
			selectRowProp = {
				mode: 'checkbox'
			},
			cellEditProp = {
				mode: 'dbclick',
				blurToSave: true,
				beforeSaveCell: this.onBeforeSaveCell,
				afterSaveCell: this.onAfterSaveCell
			};

		return (

			<div id="departments-table" className="content-box-large">
				<div className="panel-heading">
					<div className="panel-title">Departments Table</div>
				</div>
				<div className="panel-options">
					<BootstrapTable data={departments} striped={true} hover={true} pagination={true} insertRow={true} deleteRow={true} cellEdit={cellEditProp} selectRow={selectRowProp} options={options}>
						<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true} autoValue={true}>Department ID</TableHeaderColumn>
						<TableHeaderColumn dataField="name" dataSort={true} editable={{ validator: Validators.stringValidator }}>Department Name</TableHeaderColumn>
					</BootstrapTable>
				</div>

			</div>
		);
	}

	renderPreloader() {
		const { departmentGetSuccess, departmentGetRequest } = this.props.connections;

		return (<PreloaderComponent show={!departmentGetSuccess || departmentGetRequest} />);
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
		const { departmentGetSuccess } = this.props.connections;

		if (!departmentGetSuccess) {
			this.departmentsRequest();
		}
	}

	render() {
		return (
			<div className="col-md-12">
				{this.renderPreloader()}
				{this.renderDepartmentsTable()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(DepartmentsComponent);