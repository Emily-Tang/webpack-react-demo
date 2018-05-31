export default {
	path: '/',
	component: require('./index.js').default,
	indexRoute: {
		// component: require('./sign').default
	},
	onEnter: function (nextState, replace) {

	},
	childRoutes: [{
		path: 'comment',
		component: require('./comment'),
		childRoutes: [{
			// path: 'list',
			// getComponent (nextState, cb) {
			// 	require.ensure([], (require) => {
			// 		cb(null, require('./list').default);
			// 	})
			// }
		}]
	}]
}