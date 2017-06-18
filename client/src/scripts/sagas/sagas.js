import {
	all
} from 'redux-saga/effects';

import testSaga from './testSaga.js';
import employeesSagas from './employeesSagas.js';
import departmentsSagas from './departmentsSagas.js';

export default function* rootSaga() {
	yield all([
		...testSaga,
		...employeesSagas,
		...departmentsSagas
	]);
}