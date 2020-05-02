import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, popupAnimation } from '../assets/animationProperties';

export const Home = () => {
	const { variants: popupVariants, transition: popupTransition } = popupAnimation;
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	
    return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
			className="content">
				<motion.h1
				initial="initial"
				animate="animate"
				variants={popupVariants}
				transition={popupTransition}
				id="popup-text">
				Hi, I'm Mark</motion.h1>

				<div className="card">
					<h1>Homepage</h1>
					<p>Do eiusmod exercitation pariatur ea est proident voluptate irure magna laboris mollit non irure. Aliquip elit adipisicing duis esse eiusmod enim pariatur magna. Est ullamco eiusmod sit dolore laborum pariatur qui voluptate qui adipisicing. Magna minim consectetur aliquip nostrud commodo incididunt consequat est culpa ea.</p>
				</div>
				<div className="card">
					<img className="card-image" src="/images/trackandfield1.jpg" alt="T&F"/>
				</div>
		</motion.div>
    )
}
