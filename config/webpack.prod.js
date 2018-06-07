const path = require('path');
const merge = require('webpack-merge');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const rootPath = path.resolve(__dirname, '..');

module.exports = merge(baseConfig, {
	mode: 'production',
	entry: [
		'babel-polyfill',
		path.join(rootPath, 'src', 'index.js')
	],
	devtool: 'source-map',
	plugins: [
		new UglifyjsPlugin({
			sourceMap: true
		})
	]
});