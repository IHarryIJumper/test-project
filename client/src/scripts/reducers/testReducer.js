const defaultState = {
	test: true
};

const testReducer = (state = defaultState, action) => {
	let _newState = Object.assign({}, state);
	switch (action.type) {
		case 'TEST_UPDATE':
			_newState.test = action.payload.test;
			break;
		default:
			_newState = state;
			break;
	}

	return _newState;
};

export default testReducer;