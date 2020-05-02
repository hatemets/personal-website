import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../assets/animationProperties';

export const Home = () => {
    return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransitions}
			className="content">
				<div className="card">
					<h1>Hello everyone</h1>
					<p>Do eiusmod exercitation pariatur ea est proident voluptate irure magna laboris mollit non irure. Aliquip elit adipisicing duis esse eiusmod enim pariatur magna. Est ullamco eiusmod sit dolore laborum pariatur qui voluptate qui adipisicing. Magna minim consectetur aliquip nostrud commodo incididunt consequat est culpa ea.</p>
				</div>
				<div className="card">
					<img className="card-image" src="/images/trackandfield1.jpg" alt="T&F"/>
				</div>
		</motion.div>
    )
}
