import { GET_MARCHANTLIST_SUCCESS, GET_MARCHANTLIST_FAIL } from 'ACTIONS/actionTypes.js';

const initialState = {
	merchantList: [],
	searchData: {
		pageNum: 1,   //当前页码
		pageSize: 10   //每页条数
	},
	loading: true
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_MARCHANTLIST_SUCCESS:
			return {...state, ...action.payload};
		case GET_MARCHANTLIST_FAIL: 
			return {...state, ...action.payload};
		default: 
			return state;
	}
}