import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const MenuIcon = props => {
	const { isClosed, toggleMenu } = props;

	const values = {
		open: {
			top: { transform: "rotate(0deg) translate(4px, 12px)" },
			center: { transform: "rotate(0deg) translate(4px, 22px)" },
			bottom: { transform: "rotate(0deg) translate(4px, 32px)" },
		},
		closed: {
			top: { transform: "rotate(45deg) translate(20px, 12px)" },
			center: { transform: "rotate(-45deg) translate(-12px, 20px)" },
			bottom: { transform: "rotate(45deg) translate(20px, 12px)" },
		}
	};

	const { open, closed } = values;
	const { top, center, bottom } = !isClosed ? open : closed;

	return (
		<div onClick={_ => toggleMenu(!isClosed)} id="menu-icon-container" className="container">
			<svg id="menu-icon">
				<motion.rect
				 initial= {{ transform: "rotate(0deg) translate(0px, 0px)" }}
				 animate={ top }
				 width="40" height="3" rx="3"></motion.rect>

				<motion.rect
				 initial= {{ transform: "rotate(0deg) translate(0px, 0px)" }}
				 animate={ center }
				 width="40" height="3" rx="3"></motion.rect>

				<motion.rect
				 initial= {{ transform: "rotate(0deg) translate(0px, 0px)" }}
				 animate={ bottom }
				 width="40" height="3" rx="3"></motion.rect>
			</svg>
		</div>
	)
}

