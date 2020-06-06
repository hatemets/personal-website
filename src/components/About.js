import React from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const About = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;

	return (
		<div className="component-container">
			<motion.div
				initial="out"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="content"
			>
				<div className="card">
					<h1 className="title">About me</h1>
					<h3 className="subtitle">A more detailed introduction</h3>
					<p>
						My name is Mark Heidmets and I'm a student from Gustav Adolf Grammar School. I have been
						learning coding for about 3 years, specializing in web design and browser automation. I
						am passionate about learning new technologies and concepts every day.
					</p>
					<br className="break" />
					<p>
						Outside school and programming, I do track. Sprinting, which is the main event I compete
						in, has played a huge role in my life, either by improving my discipline, gaining new
						relations or making me more resilient. I look forward to continuing with track in
						college as well for it is an activity that I've been doing for over 7 years by now.
					</p>
				</div>
			</motion.div>
		</div>
	);
};
