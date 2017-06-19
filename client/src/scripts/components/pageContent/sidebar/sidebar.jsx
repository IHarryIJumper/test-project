// import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

class SidebarComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	renderDepartmentPage() {
		const { department } = this.props;
		let classPage = '';
		if (department) {
			classPage = 'current';
		}

		return (<li className={classPage}><Link to="/dep" id="departments-button"><i className="glyphicon glyphicon-home"></i>Departments</Link></li>);
	}

	renderEmployeePage() {
		const { employee } = this.props;
		let classPage = '';
		if (employee) {
			classPage = 'current';
		}

		return (<li className={classPage}><Link to="/emp" id="employees-button"><i className="glyphicon glyphicon-globe"></i>Employees</Link></li>);
	}

	componentWillMount() { }

	componentWillUnmount() { }

	componentDidMount() { }

	render() {
		return (
			<div className="sidebar content-box" style={{ display: "block" }}>
				<ul className="nav">
					{this.renderDepartmentPage()}
					{this.renderEmployeePage()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state.pages;
}

export default connect(mapStateToProps)(SidebarComponent);