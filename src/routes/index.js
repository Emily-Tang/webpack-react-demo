import React from 'react';
import { hashHistory } from 'react-router';

export default class RootRoute extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {

	}

	render () {
		return (
			<div>{this.props.children}</div>
		)
	}
}