
export default {
	path: '/',
	component: require('./index.js').default,
	indexRoute: {
		component: require('./sign').default
	},
	onEnter: function (nextState, replace) {

	},
	childRoutes: [{
		path: 'zero',
		indexRoute: {
			component: require('./marchantList').default
		},
		childRoutes: [{
			path: 'merchantList',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					cb(null, require('./marchantList').default)
				})
			}
		},{
			path: 'marchantDetail/:mid',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					cb(null, require('./marchantDetail').default)
				})
			}
		}]
	}]
}