import { combineReducers } from 'redux';

import testReducer from './testReducer.js';
import routerReducer from './routerReducer.js';
import pageReducer from './pageReducer.js';

export const combinedReducer = combineReducers({
	test: testReducer,
	router: routerReducer,
	pages: pageReducer
});