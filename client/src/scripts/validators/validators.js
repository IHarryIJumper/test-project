export const stringValidator = (value, row) => {
	const response = {
		isValid: true,
		notification: {
			type: 'success',
			msg: '',
			title: ''
		}
	};

	if (!value) {
		response.isValid = false;
		response.notification.type = 'error';
		response.notification.msg = 'Value must be inserted';
		response.notification.title = 'Requested Value';
	} else if (typeof value !== 'string') {
		response.isValid = false;
		response.notification.type = 'error';
		response.notification.msg = 'Value must be string';
		response.notification.title = 'Invalid Value';
	}

	return response;
};

export const numberValidator = (value, row) => {
	const response = {
		isValid: true,
		notification: {
			type: 'success',
			msg: '',
			title: ''
		}
	};

	const nan = isNaN(parseInt(value));

	if (nan) {
		response.isValid = false;
		response.notification.type = 'error';
		response.notification.msg = 'Value must be integer';
		response.notification.title = 'Invalid Value Type';
	}

	return response;
};

const Validators = {
	stringValidator,
	numberValidator
};

export default Validators;