import {
	call,
	put,
	takeEvery,
	takeLatest
} from 'redux-saga/effects'
import API from '../api/api-test.js';

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchData(action) {
	try {
		const data = yield call(API.fetchData, action.payload.request);
		debugger;
		yield put({
			type: "DATA_FETCH_SUCCESS",
			success: data
		});
	} catch (e) {

		debugger;
		yield put({
			type: "DATA_FETCH_FAILED",
			message: e.message
		});
	}
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/
function* mySaga() {
	yield takeLatest("DATA_FETCH_REQUESTED", fetchData);
}

export default mySaga;