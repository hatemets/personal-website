import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const MenuIcon2 = props => {
	const { isClosed, toggleMenu } = props;

	const values = {
		open: {
			top: { opacity: 1, transform: "translate(4px, 12px)" },
			center: { opacity: 1, transform: "translate(4px, 22px)" },
			bottom: { opacity: 1, transform: "translate(4px, 32px)" },
		},
		closed: {
			top: { opacity: 0, transform: "translate(4px, -100px)"},
			center: { opacity: 0, transform: "translate(4px, 0px)"},
			bottom: { opacity: 0, transform: "translate(4px, 100px)"},
		}
	};

	const { open, closed } = values;
	const { top, center, bottom } = !isClosed ? open : closed;

	return (
		<div onClick={_ => toggleMenu(!isClosed)} className="container">
			<svg style={{ fill: "white" }}>
				<motion.rect
				 initial={{ opacity: 1, transform: "translate(4px, 12px)" }}
				 animate={ top }
				 width="40" height="3" rx="3"></motion.rect>

				<motion.rect
				 initial={{ opacity: 1, transform: "translate(4px, 22px)" }}
				 animate={ center }
				 width="40" height="3" rx="3"></motion.rect>

				<motion.rect
				 initial={{ opacity: 1, transform: "translate(4px, 32px)" }}
				 animate={ bottom }
				 width="40" height="3" rx="3"></motion.rect>
			</svg>
		</div>
	)
}

