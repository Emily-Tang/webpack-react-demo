import { put, select } from 'redux-saga/effects';
import { axiosPost } from 'UTIL/common.js';
import { GET_MARCHANTLIST_SUCCESS, GET_MARCHANTLIST_FAIL } from 'ACTIONS/actionTypes.js';

//获取列表
function* getMarchantList ({ payload }) {
	let data = yield axiosPost('/marchant.json');

	if (data.result) {
		yield put({
			type: GET_MARCHANTLIST_SUCCESS,
			payload: {
				marchantList: data.data || [],
				loading: false
			}
		})
	} else {
		yield put({
			type: GET_MARCHANTLIST_FAIL,
			payload: {
				loading: true
			}
		})
	}
}

const marchantListSaga = {
	getMarchantList
}

export default marchantListSaga