const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..'),   //项目根目录
	  src = path.join(rootPath, 'src');           //开发源码目录

module.exports = {
	output: {
		path: path.join(rootPath, 'dist'),
		filename: '[name].[hash:8].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.join(rootPath, 'src'),
			use: {
				loader: 'babel-loader',
				// options: {
				// 	presets: ['@babel/preset-react']
				// }
			}
		}, {
			test: /\.less$/,
			// include: path.join(rootPath, 'src'),
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'less-loader',
					options: {
						javascriptEnabled: true
					}
				}
			]
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(src, 'index.html')
		})
	],
	resolve: {
		extensions: ['.js', '.less'],
		alias: {
			ACTIONS: path.resolve(__dirname, '../src/actions'),
			UTIL: path.resolve(__dirname, '../src/util')
		}
	}
}