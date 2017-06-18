import {
	call,
	put,
	takeEvery,
	takeLatest
} from 'redux-saga/effects'
import API from '../api/api-test.js';

function* fetchData(action) {
	try {
		debugger;
		const data = yield call(API.fetchData, action.payload.request, 'yeah');
		yield put({
			type: "DATA_FETCH_SUCCESS",
			success: data
		});
	} catch (e) {
		yield put({
			type: "DATA_FETCH_FAILED",
			message: e.message
		});
	}
}

const testSaga = [
  takeLatest("DATA_FETCH_REQUESTED", fetchData),
];

export default testSaga;