import {
	call,
	put,
	takeEvery,
	takeLatest,
	all,
	select
} from 'redux-saga/effects';

import API from '../api/api.js';

import {
	employeesCommActions, employeesActions
} from '../actions/actions.js';

function* getData(action) {
	try {
		const data = yield call(API.getEmployees);
		yield put(employeesActions.setEmployees(data));
		yield put(employeesCommActions.getSuccess());
	} catch (e) {
		yield put(employeesCommActions.getFailed());
	}
}

const employeesSagas = [
  takeLatest("EMPLOYEE_GET_REQUEST", getData),
];

export default employeesSagas;