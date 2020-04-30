import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitions } from '../assets/animationProperties';

export const Projects = () => {
	return (
		<motion.div initial="out" animate="in" exit="out" variants={pageTransitions} className="content">
			<h1>Here are my projects</h1>
		</motion.div>
	)
}
