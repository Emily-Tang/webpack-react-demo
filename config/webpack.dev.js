const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const rootPath = paht.resolve(__dirname, '..');

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
		open: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
