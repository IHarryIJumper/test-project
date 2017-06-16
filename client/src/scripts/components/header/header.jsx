import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() { }

	componentWillUnmount() { }

	componentDidMount() { }

	render() {
		return (
			<div className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="logo">
								<h1><Link to="/">Test Project</Link></h1>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-lg-12">
									<div className="input-group form">
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-2">

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

export default connect(mapStateToProps)(HeaderComponent);