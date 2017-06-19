import React from 'react';
import PropTypes from 'prop-types';

import './preloader.css';

class PreloaderComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { show } = this.props;

		let renderValue = null;

		if (show === true || show === undefined) {
			renderValue = (
				<div className="preloader-container">
					<div className="preloader" />
				</div>
			);
		}

		return renderValue;
	}
}

PreloaderComponent.propTypes = {
	show: PropTypes.bool
}

export default PreloaderComponent;