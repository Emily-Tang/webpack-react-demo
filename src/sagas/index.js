import { takeLatest } from 'redux-saga/effects';
import marchantListSaga from './marchantList';
import { GET_MARCHANTLIST } from 'ACTIONS/actionTypes.js';

export function* rootSaga () {
	//marchantList
	yield takeLatest(GET_MARCHANTLIST, marchantListSaga.getMarchantList);
}