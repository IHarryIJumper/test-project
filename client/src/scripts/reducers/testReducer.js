const defaultState = {
	test: true,
	dataSuccess: false,
	dataFailed: false,
	dataRequested: false
};

const testReducer = (state = defaultState, action) => {
	let _newState = Object.assign({}, state);
	switch (action.type) {
		case 'TEST_UPDATE':
			_newState.test = action.payload.test;
			break;
		case 'DATA_FETCH_REQUESTED':
			_newState.dataRequested = action.payload.request;
			console.log('Data requested!');
			break;
		case 'DATA_FETCH_SUCCESS':
			_newState.dataSuccess = action.success;
			_newState.dataRequested = false;
			console.log('Data success!');
			break;
		case 'DATA_FETCH_FAILED':
			_newState.dataFailed = action.message;
			_newState.dataRequested = false;
			console.log('Data failed :(');
			break;
		default:
			_newState = state;
			break;
	}

	console.log('_newState:', _newState);

	return _newState;
};

export default testReducer;