import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/animationProperties';

export const About = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;

	return (
		<motion.div 
		initial="out"
		animate="in" 
		exit="out" 
		variants={pageVariants}
		transition={pageTransition}
		className="content">
			<div className="card">
				<h1>About me</h1>
				<p>Who am I, anyway? My name is Mark Heidmets and I'm currently
					studying at Gustav Adolf Grammar School in Tallinn, Estonia.
					I have been programming for approximately two years, focusing
					mainly on web design and technologies.
				</p>
			</div>
		</motion.div>
	)
}
