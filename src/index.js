import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import routeConfig from './routes/routeConfig.js';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Router routes={ routeConfig } history={ hashHistory }/>
	</Provider>
	, document.getElementById('root'));


if (DEV) {
	if (module.hot) {
		module.hot.accept('./routes/routeConfig', () => {
			const nextRoutes = require('./routes/routeConfig').default;

			ReactDOM.render(
				<AppContainer>
					<Provider store={store}>
						<Router key={ Math.random() } history={ hashHistory } routes={ nextRoutes }/>
					</Provider>
				</AppContainer>,
				document.getElementById('root'));
		})
	}
}