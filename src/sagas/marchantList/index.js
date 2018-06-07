import { put, select } from 'redux-saga/effects';
import { Toast } from 'antd-mobile';
import { axiosPost } from 'UTIL/common.js';
import { GET_MARCHANTLIST_SUCCESS, GET_MARCHANTLIST_FAIL, HANDLE_MARCHANTLIST_LOADING } from 'ACTIONS/actionTypes.js';

//获取列表
function* getMarchantList ({ payload }) {
	let { marchantList, searchData } = yield select(state => state.marchantList);
	
	let data = yield axiosPost('/zero/marchantList.json');

	if (data.result) {
		const totalCount = data.count;
		data = data.data || [];
		data.length ? marchantList = marchantList.concat(data) : null;

		yield put({
			type: GET_MARCHANTLIST_SUCCESS,
			payload: {
				marchantList,
				searchData: payload,
				hasMore: totalCount > marchantList.length ? true : false
			}
		})
	} else {
		Toast.fail(data.msg);

		yield put({
			type: GET_MARCHANTLIST_FAIL,
			payload: {
				searchData: {
					...payload,
					pageNum: --payload.pageNum
				}
			}
		})
	}
}

const marchantListSaga = {
	getMarchantList
}

export default marchantListSaga