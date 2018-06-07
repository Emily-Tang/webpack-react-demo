import { GET_MARCHANTLIST } from '../actionTypes.js';

/*
	action creator
*/


//获取列表
export function getMarchantList (params) {
	return {
		type: GET_MARCHANTLIST,
		payload: params
	};
}