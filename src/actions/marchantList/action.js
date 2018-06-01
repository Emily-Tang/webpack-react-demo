import { GET_MERCHANTLIST } from '../actionTypes.js';

export function getMerchantList (params) {
	return {
		type: GET_MERCHANTLIST,
		payload: params
	};
}