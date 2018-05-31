import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

class App extends React.Component {
	render () {
		return (
			<div>Hello webpack</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);