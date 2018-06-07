import { GET_MARCHANTLIST_SUCCESS, GET_MARCHANTLIST_FAIL, HANDLE_MARCHANTLIST_LOADING } from 'ACTIONS/actionTypes.js';

const initialState = {
	marchantList: [],
	searchData: {
		keyword: '',   //关键字搜索
		pageNum: 1,   //当前页码
		pageSize: 3   //每页条数
	},
	hasMore: true   //是否有更多数据可以加载
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_MARCHANTLIST_SUCCESS:
			return {...state, ...action.payload};
		case GET_MARCHANTLIST_FAIL: 
			return {...state, ...action.payload};
		case HANDLE_MARCHANTLIST_LOADING:
			return {...state, ...action.payload};
		default: 
			return state;
	}
}