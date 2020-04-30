import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitions } from '../assets/animationProperties';

export const About = () => {
	console.log(pageTransitions);
	
	return (
		<motion.div initial="out" animate="in" exit="out" variants={pageTransitions} className="content">
			<h1>About page</h1>
		</motion.div>
	)
}
