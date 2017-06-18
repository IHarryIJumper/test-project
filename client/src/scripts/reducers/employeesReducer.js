import Employees from '../models/employees.js';

const defaultState = new Employees();

const employeesReducer = (state = defaultState, action) => {
	let _newState = new Employees(Object.assign({}, state).employees);
	// let _newState = state;
	switch (action.type) {
		case 'SET_EMPLOYEES':
			_newState = new Employees(action.payload.employees);
			break;
		case 'ADD_EMPLOYEE':
			_newState.add(action.payload.employee);
			break;
		case 'UPDATE_EMPLOYEE':
			_newState.update(action.payload.newData);
			break;
		case 'DELETE_EMPLOYEE':
			_newState.delete(action.payload.id);
			break;
		default:
			_newState = state;
			break;
	}

	return _newState;
};

export default employeesReducer;