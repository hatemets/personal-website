import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/animationProperties';

export const Projects = () => {
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
				<h1>Here are my projects</h1>
				<p>Velit ut et reprehenderit minim in elit ad. Ut mollit velit officia magna enim do ex id ullamco incididunt anim. Cillum esse esse veniam exercitation velit velit sit ad esse sit magna. Ut ullamco irure ea est aute velit et irure voluptate Lorem ex dolore. Velit nostrud ut nisi excepteur. Do veniam dolor commodo aliqua aliqua excepteur.</p>
			</div>
		</motion.div>
	)
}
