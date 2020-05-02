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
				<div className="card">
					<motion.h1
					initial="initial"
					animate="animate"
					variants={popupVariants}
					transition={popupTransition}
					id="popup-text">
					Hi, I'm Mark</motion.h1>
				</div>

				<div className="card">
					<h1>Thank you for visiting my website!</h1>
					<p>Here you can find out more about who I am and what I do. In addition, you can also take a look at some of the projects that I've been working on.</p>
				</div>
				<img src="/images/trackandfield1.jpg" alt="T&F"/>
		</motion.div>
    )
}
