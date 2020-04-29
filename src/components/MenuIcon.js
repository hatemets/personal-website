import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { openedStyles, closedStyles } from '../assets/iconStyles';

export const MenuIcon = (props) => {
	const { isOpened, toggleMenu } = props;
	
	const { top , center, bottom } = useSpring({
		to: isOpened ? openedStyles : closedStyles
	})

	const handleClick = _ => {
		toggleMenu(!isOpened);
		console.log(isOpened);
	}
	
	return (
		<div onClick={handleClick} className="container">
			<svg id="menu-icon">
				<animated.rect transform={top} width="40" height="3" rx="3"></animated.rect>
				<animated.rect transform={center} width="40" height="3" rx="3"></animated.rect>
				<animated.rect transform={bottom} width="40" height="3" rx="3"></animated.rect>
			</svg>
		</div>
	)
}
