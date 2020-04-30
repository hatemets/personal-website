import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitions } from '../assets/animationProperties';

export const Home = () => {
    return (
		<motion.div initial="out" animate="in" exit="out" variants={pageTransitions} id="home">
			<div className="content">
				<h1>Hello everyone</h1>
			</div>
		</motion.div>
    )
}
