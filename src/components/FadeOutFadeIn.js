import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FadeOutFadeIn extends Component {

	state = {
		children: this.props.children,
		updating: false
	}

	componentWillReceiveProps(props) {
		if (props.children.key && props.children.key === this.props.children.key) {
			return
		}
		if (props.children === this.props.children) {
			return
		}
		this.setState({updating: true})
		setTimeout(_ => {
			this.setState({updating: false, children: props.children})
		}, 200)
	}

	render() {
		return (
			<ReactCSSTransitionGroup className={this.props.className} transitionName={this.props.transitionName} transitionEnterTimeout={300} transitionLeaveTimeout={200}>
			{!this.state.updating && (
				<div>{this.state.children}</div>
			)}
			</ReactCSSTransitionGroup>
		)
	}

}

/*
const Num = ({ value, updating }) => {
	return (
		<p id="num">
			<ReactCSSTransitionGroup transitionName="num" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
			{!updating && (
				<span>{value}</span>
			)}
			</ReactCSSTransitionGroup>
		</p>
	)
}
*/

export default FadeOutFadeIn
