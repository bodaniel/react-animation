import React from 'react'
import './Menu.css'

const Menu = ({ visible, onClose }) => {
	return (
		<div id="menu" className={(visible) ? "visible" : ""} onClick={onClose}>
			<div id="menu-bg">
			</div>
			<div id="menu-content">
				<button onClick={onClose}>Hide</button>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Report</li>
					<li>Do nothing</li>
				</ul>
			</div>
		</div>
	)
}

export default Menu
