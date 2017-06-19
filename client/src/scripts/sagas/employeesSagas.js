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
	employeesCommActions,
	employeesActions
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

function* addData(action) {
	try {
		yield put(employeesCommActions.add());
		const data = yield call(API.addEmployee, action.payload.employee);
		yield put(employeesCommActions.addSuccess());
	} catch (e) {
		yield put(employeesCommActions.addFailed());
	}
}

function* updateData(action) {
	try {
		yield put(employeesCommActions.update());
		const data = yield call(API.updateEmployee, action.payload.newData.id, action.payload.newData);
		yield put(employeesCommActions.updateSuccess());
	} catch (e) {
		yield put(employeesCommActions.updateFailed());
	}
}

function* deleteData(action) {
	try {
		yield put(employeesCommActions.delete());
		const responses = yield all(action.payload.idArray.map(id => call(API.deleteEmployee, id)));
		yield put(employeesCommActions.deleteSuccess());
	} catch (e) {
		yield put(employeesCommActions.deleteFailed());
	}
}

const employeesSagas = [
	takeLatest("EMPLOYEE_GET_REQUEST", getData),
	takeLatest("ADD_EMPLOYEE", addData),
	takeLatest("UPDATE_EMPLOYEE", updateData),
	takeLatest("DELETE_EMPLOYEES", deleteData),
];

export default employeesSagas;