import Departments from '../models/departments.js';

const defaultState = new Departments();

const departmentsReducer = (state = defaultState, action) => {
	
	let _newState = new Departments(Object.assign({}, state).departments);
	// let _newState = state;
	switch (action.type) {
		case 'SET_DEPARTMENTS':
			_newState = new Departments(action.payload.departments);
			break;
		case 'ADD_DEPARTMENT':
			_newState.add(action.payload.department);
			break;
		case 'UPDATE_DEPARTMENT':
			_newState.update(action.payload.newData);
			break;
		case 'DELETE_DEPARTMENT':
			_newState.delete(action.payload.id);
			break;
		case 'DELETE_DEPARTMENTS':
			_newState.deleteSeveral(action.payload.idArray);
			break;
		default:
			_newState = state;
			break;
	}

	return _newState;
};

export default departmentsReducer;