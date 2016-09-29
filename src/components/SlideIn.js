import React from 'react'
import FadeOutFadeIn from './FadeOutFadeIn';
import Num from './Num';
import './SlideIn.css'

const SlideIn = ({visible, count, onClose}) => {
	return (
		<div id="SlideIn" className={(visible) ? "visible" : ""}>
      <FadeOutFadeIn transitionName="num">
        <Num value={count} key={count}/>
      </FadeOutFadeIn>
			<button onClick={onClose}>Hide</button>
		</div>
	)
}

export default SlideIn
