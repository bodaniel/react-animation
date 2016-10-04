import React, { Component } from 'react'

import './FadeOutFadeIn.css'

class FadeOutFadeIn extends Component {

	state = {
		children: this.props.children,
		hiding: false
	}

	componentWillReceiveProps(props) {
		if (props.children.key && props.children.key === this.props.children.key) {
			return
		}
		if (props.children === this.props.children) {
			return
		}
		this.setState({ hiding: true })
		setTimeout(() => {
			this.setState({
				hiding: false,
				children: props.children
			})
		}, 200)
	}

	render() {
		return (
			<div className={'FadeOutFadeIn ' + (this.state.hiding ? "hiding" : "")}>
				{this.state.children}
			</div>
		)
	}

}

export default FadeOutFadeIn
