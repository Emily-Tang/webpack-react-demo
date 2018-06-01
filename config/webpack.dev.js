const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const rootPath = path.resolve(__dirname, '..');

module.exports = merge(baseConfig, {
	mode: 'development',
	entry: {
		index: [
			'react-hot-loader/patch',   //实现局部刷新
			path.join(rootPath, 'src', 'index.js')
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(rootPath, 'dist'),
		hot: true,
		open: true,
		port: 3000
		//当使用HTML5 History Api时，任何404响应都可能需要被替代了index.html。该属性的值可为对象，进一步控制跳转
		// historyApiFallback: true
		// historyApiFallback: {
		// 	rewrites: [{
		// 		from: /^\/$/,
		// 		to: '/views/landing.html'
		// 	}, {
		// 		from: /^\/subpage/,
		// 		to: '/views/subpage.html'
		// 	}]
		// }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			DEV: JSON.stringify(true)
		})
	]
});
