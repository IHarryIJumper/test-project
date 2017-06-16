import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

class DefaultComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			_isMounted: false
		};

	}

	getData() {
		const { test, dispatch } = this.props;
		dispatch({ type: 'DATA_FETCH_REQUESTED', payload: { request: true } });
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
				{this.renderRequestStage()}
			</div>

		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(DefaultComponent);