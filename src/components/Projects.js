import React from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const Projects = () => {
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
					<h1 className="title">Projects</h1>
					<p>Check out my github page to see what I've been doing</p>
					<a className="link" href="https://github.com/hatemets">
						Click here to visit my github account
					</a>
				</div>
			</motion.div>
		</div>
	);
};
