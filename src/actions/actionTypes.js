//merchantList action type
export const GET_MARCHANTLIST = 'GET_MARCHANTLIST';
export const GET_MARCHANTLIST_SUCCESS = 'GET_MARCHANTLIST_SUCCESS';
export const GET_MARCHANTLIST_FAIL = 'GET_MARCHANTLIST_FAIL';













//备注：页面加载的时候，所有的reducer文件都会被遍历，判断action.type，然后做相应的操作，所以action type必须唯一（redux-saga导致该问题）