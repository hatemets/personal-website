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
					<h1>Projects</h1>
					<p>
						I am passionate about building the website you would love to have.
						My aim is to be able to provide you with the best possible UI and
						UX design, through which the site would catch the attention of even
						the most exorable and demanding customers.
					</p>
				</div>
			</motion.div>
		</div>
	);
};
