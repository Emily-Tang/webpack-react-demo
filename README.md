# 功能描述
* 单页面应用前端框架搭建

# 命令介绍
### cnpm i
安装依赖包命令

### npm start
开发环境打包编译命令

### npm run build
生产环境打包命令

# 项目结构简介
* webpack-react-demo
	* config
		* webpack.base.js
		* webpack.dev.js
		* webpack.prod.js
	* mock
		marchantList.json
	* src
		* actions
			* marchantList
				* action.js
			* actionTypes.js
		* components
		* containers
		* reducers
			* marchantList
				* index.js
			* index.js
		* routes
			* marchantList
				* index.js
				* index.less
			* index.js
			* routeConfig.js
		* sagas
			* marchantList
				* index.js
			* index.js
		* store
			* index.js
		* util
			* common.js
		* index.html
		* index.js
	* .babelrc
	* .gitignore
	* package.json
	* README.md

# 测试DEMO
暂无

# 作者列表
汤汤

# 更新链接

# 历史版本
### v0.0.1
* 环境搭建
* mock数据请求

# 联系方式


# 插件介绍
### webpack
webpack4.0及以上，要同时安装webpack-cli

### babel-plugin-import
实现按需加载antd的组件

### @babel/plugin-proposal-class-properties
支持javascript新特性

### react-hot-loader
开发环境下，实现页面局部刷新
