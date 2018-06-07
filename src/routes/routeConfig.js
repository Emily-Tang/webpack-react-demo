export default {
	path: '/',
	component: require('./index.js').default,
	indexRoute: {
		component: require('./sign').default
	},
	onEnter: function (nextState, replaceState) {   //onEnter onLeave路由机制
		//可以在这里做一些权限验证等
	},
	childRoutes: [{
		path: 'zero',
		indexRoute: {
			component: require('./marchantList').default
		},
		childRoutes: [{
			path: 'merchantList',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {     //require.ensure(dependencies: String[], callback: function(require), chunkName: String)
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
	}, {
		path: 'sign',
		getComponent (nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./sign').default);
			})
		}
	}]
}