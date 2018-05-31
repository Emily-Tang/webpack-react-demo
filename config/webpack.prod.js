const merge = require('webpack-merge');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new UglifyjsPlugin({
			sourceMap: true
		})
	]
});