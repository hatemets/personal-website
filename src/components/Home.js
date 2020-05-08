import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, popupAnimation } from '../assets/animationProperties';

export const Home = () => {
	const { variants: popupVariants, transition: popupTransition } = popupAnimation;
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;

    return (
		<motion.div className="component-wrapper">
			<div id="image-one" className="image">
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
								<p>Here you can find out more about who I am and what I do. In addition, you can also take a look at some of the projects I've been working on.</p>
							</div>
				</motion.div>
			</div>

			<section id="section-one">
				<h1>Who am I?</h1>
				<p>Who am I, anyway? My name is Mark Heidmets and I'm currently
						studying at Gustav Adolf Grammar School in Tallinn, Estonia.
						I have been programming for approximately two years, focusing
						mainly on web design and browser automation.</p>
				<div className="s3"></div>
			</section>

			<div id="image-two" className="image"></div>

			<section id="section-two">
				<h1>Some Cool Text</h1>
				<p>Irure nisi esse aliqua dolore culpa esse non incididunt sunt ipsum. Sit eiusmod minim do nisi ut occaecat mollit sint amet ea. Do aliqua reprehenderit cupidatat ullamco ipsum. Id anim ipsum voluptate ipsum proident cupidatat dolor do ullamco. Nisi commodo deserunt Lorem Lorem magna esse nostrud irure.</p>
			</section>

		</motion.div>
    )
}
