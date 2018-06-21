import axios from 'axios';
import { Toast } from 'antd-mobile';

const requestPrefix = '/zero';	   //接口请求统一前缀

//============类型判断=============
function isType (type) {
	return function (obj) {
		return Object.prototype.toString.call(obj) === "[Object " + type + "]";
	}
}

let isArray = Array.isArray || isType('Array');


//axios post请求
export function axiosPost (url, params = {}) {
	let formData = new FormData();

	if (params) {
		for (var key in params) {
			formData.append(key, params[key]);
		}
	}

	return new Promise((resolve, reject) => {
		axios.post(url, formData).then((response) => {
			resolve(response.data);
		}).catch((error) => {
			Toast.fail(error);
		});
	})
}

//将JSON对象转为字符串拼接的形式
export function param (data, opts = {}) {
	let isEncode = opts.isEncode === undefined ? true : false;

	if (typeof data === 'string') {
		return string;
	}

	let str = '',
		temp;

	for (let i in data) {
		temp = isArray(data[i])
				? JSON.stringify(data[i])
				: (isEncode ? encodeURIComponent(data[i]) : data[i]);

		str += `&${i}=${temp}`; 
	}

	return str.replace(/^\&/, '');
}

//模拟封装jsonp
function JSONP (url, options) {
	if (!url) {
		return;
	}

	let params = Object.assign({
		_: new Date().getTime() + 1,
		callback: 'jsonpCallback_' + new Date().toTime()
	}, options.params || {});

	let mark = url.indexOf("?") === -1 ? '?' : '&';
	url += mark + param(params);

	let script = document.createElement('script');

	let promise = new Promise(function (resolve, reject) {
		window[params.callback] = function (data) {
			try {
				options.success && options.success(data);
				resolve({ data });
			} catch (e) {
				options.error && options.error(data);
				reject(e);
			} finally {
				options.complete && options.complete({ data });
				//最后删除该函数与script元素
				delete window[params.callback];
				script.parentNode.removeChild(script);
			}
		}
	})

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);

	return promise;

}

export function request (url, options = {}) {
	options.dataType = options.dataType || 'json';

	if (options.dataType.toLowerCase() === 'jsonp') {
		return JSONP(url, options);
	}

	let reg = new RegExp(`^${requestPrefix}`);

	// if (url.charAt(0) !== '/') {
	// 	url = '/' + url;

	// 	if (!reg.test(url)) {
	// 		url = requestPrefix + url;
	// 	}
	// }

	options = Object.assign({
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		url
	}, options);

	options.data = param(options.data);
	options.params = param(options.params);

	return new Promise(function (resolve, reject) {
		axios(options)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				reject(error);
				Toast.fail(error);
			})
	})

}