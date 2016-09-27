import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import './Num2.css'



const Num2 = ({ value }) => {
	return (
		<p id="num2">
			<ReactCSSTransitionReplace transitionName="num2" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
				<span key={value}>{value}</span>
			</ReactCSSTransitionReplace>
		</p>
	)
}

export default Num2
