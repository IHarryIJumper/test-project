import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { employeesCommActions } from '../../actions/actions';

class EmployeesComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	getData() {
		const { test, dispatch } = this.props;
		dispatch({ type: 'DATA_FETCH_REQUESTED', payload: { request: true } });
	}

	employeesRequest() {
		const { dispatch } = this.props;
		dispatch(employeesCommActions.get());
	}

	renderRequestStage() {
		const { dataSuccess, dataFailed, dataRequested } = this.props.test;

		let renderValue = null;

		if (dataRequested === true) {
			const style = {
				width: 133,
				height: 100,
				display: 'block'
			}
			renderValue = (<img src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" alt="waiting request..." style={style} />);
		} else {
			if (dataSuccess !== false && dataFailed === false) {
				renderValue = (
					<div>
						<h1>Success request! </h1>
						<p>Data: {JSON.stringify(dataSuccess)} </p>
					</div>
				);
			}

			if (dataFailed !== false && dataSuccess === false) {
				renderValue = (
					<div>
						<h1>Success failed :(</h1>
						<p>Message: {JSON.stringify(dataFailed)}</p>
					</div>
				);
			}
		}

		return renderValue;
	}

	renderEmployeesData() {
		const { employeeGetRequest, employeeGetSuccess, employeeGetFailed } = this.props.connections,
			{ employees } = this.props;

		if (employeeGetSuccess) {
			return (<div>
				{JSON.stringify(employees)}
			</div>);
		}
	}

	renderEmployeesTable() {

		const { employees } = this.props.employees;

		let renderValue = (
			<BootstrapTable data={employees} striped={true} hover={true} pagination={true} insertRow={true} deleteRow={true} cellEdit={{
				mode: 'dbclick'
			}}>
				<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Employee ID</TableHeaderColumn>
				<TableHeaderColumn dataField="firstName" dataSort={true}>First Name</TableHeaderColumn>
				<TableHeaderColumn dataField="lastName" dataSort={true}>Last Name</TableHeaderColumn>
				<TableHeaderColumn dataField="departmentId" dataAlign="center" dataSort={true}>Department ID</TableHeaderColumn>
			</BootstrapTable>
		);

		return renderValue;
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

	componentDidMount() { }

	render() {
		return (
			<div id='default-page'>
				Default page.
				Time {String(new Date())}.
				<br />
				Current location: {this.props.location.pathname}
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/dep">Dep</Link></li>
					<li><Link to="/emp">Emp</Link></li>
				</ul>
				<button onClick={(event) => { this.getData(); }}>Push me!</button>
				<button onClick={(event) => { this.employeesRequest(); }}>Get Employees</button>
				{this.renderRequestStage()}
				{this.renderEmployeesData()}

				{this.renderEmployeesTable()}
			</div>

		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(EmployeesComponent);