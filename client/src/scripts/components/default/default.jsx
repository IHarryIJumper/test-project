import React from 'react';

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

	componentWillMount() {
		this.setState({
			_isMounted: true
		});
	}

	componentWillUnmount() {
		this.setState({
			_isMounted: false
		});
	}

	componentDidMount() { }

	render() {
		console.log();
		return (
			<div id='default-page'>
				Default page.
				Time {String(new Date())}.
				<br/>
				Current location: {this.props.location.pathname}
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/dep">Dep</Link></li>
					<li><Link to="/emp">Emp</Link></li>
				</ul>
			</div>

		);
	}
}

export default DefaultComponent;