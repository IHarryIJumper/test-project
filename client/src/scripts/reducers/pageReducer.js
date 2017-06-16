const defaultState = {
	department: true,
	employee: false
};

const pageReducer = (state = defaultState, action) => {
	let _newState = Object.assign({}, state),
		defaultPage;
	Object.keys(_newState).map((pageKey, pageKeyIndex) => {
		_newState[pageKey] = false;
		if (pageKeyIndex === 0) {
			defaultPage = pageKey;
		}
	});
	switch (action.type) {
		case 'SET_DEFAULT_PAGE':
			_newState[defaultPage] = true;
			break;
		case 'SET_DEPARTMENT_PAGE':
			_newState.department = true;
			break;
		case 'SET_EMPLOYEE_PAGE':
			_newState.employee = true;
			break;
		default:
			_newState = state;
			break;
	}

	return _newState;
};

export default pageReducer;