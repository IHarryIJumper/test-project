import { combineReducers } from 'redux';

import testReducer from './testReducer.js';
import routerReducer from './routerReducer.js';
import pageReducer from './pageReducer.js';
import employeesReducer from './employeesReducer.js';
import departmentsReducer from './departmentsReducer.js';
import commReducer from './commReducer.js';

export const combinedReducer = combineReducers({
	test: testReducer,
	router: routerReducer,
	pages: pageReducer,
	employees: employeesReducer,
	departments: departmentsReducer,
	connections: commReducer
});