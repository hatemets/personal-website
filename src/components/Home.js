import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, popupAnimation } from '../assets/animationProperties';

export const Home = () => {
	const { variants: popupVariants, transition: popupTransition } = popupAnimation;
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	
    return (
		<div className="component-wrapper">
			<motion.div id="image-one" className="image">
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
				</motion.div>
			</motion.div>

			<section id="section-one">
				<h1 className="s1">Who am I?</h1>
				<p className="s2">Nostrud enim id sunt amet laborum nulla.qui cillum minim mollit qui eu. Irure ut voluptate culpa est officia deserunt cupidatat sit velit. Irure sint sit labore do aliqua ut velit veniam ut tempor non deserunt sint.</p>
				<div className="s3"></div>
			</section>

			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			id="image-two"
			className="image"></motion.div>

			<section id="section-two">
				<h1>Some Cool Text</h1>
				<p>Irure nisi esse aliqua dolore culpa esse non incididunt sunt ipsum. Sit eiusmod minim do nisi ut occaecat mollit sint amet ea. Do aliqua reprehenderit cupidatat ullamco ipsum. Id anim ipsum voluptate ipsum proident cupidatat dolor do ullamco. Nisi commodo deserunt Lorem Lorem magna esse nostrud irure.</p>
			</section>

		</div>
    )
}
