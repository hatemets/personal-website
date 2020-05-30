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
					<p>I am yet to create the projects.</p>
				</div>
				<div className="card">
					<h1 className="title">Github profile</h1>
					<a className="link" href="https://www.github.com/hatemets/">
						My Github profile
					</a>
				</div>
			</motion.div>
		</div>
	);
};
