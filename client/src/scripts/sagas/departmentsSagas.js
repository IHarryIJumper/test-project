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
	departmentsCommActions, departmentsActions
} from '../actions/actions.js';

function* getData(action) {
	try {
		const data = yield call(API.getDepartments);
		yield put(departmentsActions.setDepartments(data));
		yield put(departmentsCommActions.getSuccess());
	} catch (e) {
		yield put(departmentsCommActions.getFailed());
	}
}

const departmentsSagas = [
  takeLatest("DEPARTMENT_GET_REQUEST", getData),
];

export default departmentsSagas;