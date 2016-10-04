import React, { Component } from 'react'

import './FadeOutFadeIn.css'

class FadeOutFadeIn extends Component {

	state = {
		children: this.props.children,
		status: 'showing'
	}

	componentWillReceiveProps(props) {
		if (props.children.key && props.children.key === this.props.children.key) {
			return
		}
		if (props.children === this.props.children) {
			return
		}
		this.setState({ status: 'hiding'})
		setTimeout(() => {
			this.setState({
				status: 'showing', 
				children: props.children
			})
		}, 500)
	}

	render() {
		return (
			<div className={'FadeOutFadeIn ' + this.state.status}>
				{this.state.children}
			</div>
		)
	}

}

export default FadeOutFadeIn
