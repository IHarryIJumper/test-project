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
	departmentsCommActions,
	departmentsActions
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

function* addData(action) {
	try {
		yield put(departmentsCommActions.add());
		const data = yield call(API.addDepartment, action.payload.department);
		yield put(departmentsCommActions.addSuccess());
	} catch (e) {
		yield put(departmentsCommActions.addFailed());
	}
}

function* updateData(action) {
	try {
		yield put(departmentsCommActions.update());
		const data = yield call(API.updateDepartment, action.payload.newData.id, action.payload.newData);
		yield put(departmentsCommActions.updateSuccess());
	} catch (e) {
		yield put(departmentsCommActions.updateFailed());
	}
}

function* deleteData(action) {
	try {
		yield put(departmentsCommActions.delete());
		const responses  = yield all(action.payload.idArray.map(id => call(API.deleteDepartment, id)));
		yield put(departmentsCommActions.deleteSuccess());
	} catch (e) {
		yield put(departmentsCommActions.deleteFailed());
	}
}

const departmentsSagas = [
	takeLatest("DEPARTMENT_GET_REQUEST", getData),
	takeLatest("ADD_DEPARTMENT", addData),
	takeLatest("UPDATE_DEPARTMENT", updateData),
	takeLatest("DELETE_DEPARTMENTS", deleteData),
];

export default departmentsSagas;