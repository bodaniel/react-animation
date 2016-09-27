import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Num.css'

const Num = ({ value, updating }) => {
	return (
		<p id="num">
			<ReactCSSTransitionGroup transitionName="num" transitionEnterTimeout={300} transitionLeaveTimeout={100}>
			{!updating && (
				<span>{value}</span>
			)}
			</ReactCSSTransitionGroup>
		</p>
	)
}

export default Num
