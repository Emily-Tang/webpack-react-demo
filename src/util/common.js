import axios from 'axios';
import { Toast } from 'antd-mobile';

export function axiosPost (url, params) {
	let formData = new FormData();

	if (params) {
		for (var key in params) {
			formData.append(key, params[key]);
		}
	}

	return new Promise((resolve, reject) => {
		axios.post(url, params).then((response) => {
			resolve(response.data);
		}).catch((error) => {
			Toast.fail(error);
		});
	})
}