import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

import SidebarComponent from './sidebar/sidebar.jsx';

class PageContentComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() { }

	componentWillUnmount() { }

	componentDidMount() { }

	render() {
		return (
			<div className="page-content">
				<div className="row">
					<div className="col-md-2">
						<SidebarComponent />
					</div>
					<div className="col-md-10">
						<div className="row">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>

		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(PageContentComponent);