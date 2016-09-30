import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Popup.css'

const Popup = ({ visible, onClose }) => {
	return (
		<ReactCSSTransitionGroup transitionName="popup" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
		{visible && (
			<div id="popup">
				<p>This is a popup popping up</p>
				<button onClick={onClose}>Close</button>
			</div>
		)}
		</ReactCSSTransitionGroup>
	)
}

export default Popup
