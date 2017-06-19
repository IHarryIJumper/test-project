// import React from 'react';
import { connect } from 'react-redux';

import {
	Link
} from 'react-router-dom';

class FooterComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() { }

	componentWillUnmount() { }

	componentDidMount() { }

	render() {
		return (
			<footer>
				<div className="container">
					<div className="copy text-center">
						Andrey Menshikh 2017 <Link to="/">Test Project</Link>
					</div>
				</div>
			</footer>

		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
}

export default connect(mapStateToProps)(FooterComponent);