import React from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const Contact = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;

	return (
		<div id="contact" className="component-container">
			<motion.div
				initial="out"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="content"
			>
				<div className="card">
					<h1 className="title">Contact information</h1>
					<p>
						In case you are interested in learning more about me, you can contact me via the following mediums:
					</p>
					<ul id="medium-list">
						<li className="email">
							<a href="mailto:heidmetsmark@gmail.com">Email</a>
						</li>
						<li className="facebook">
							<a href="https://www.facebook.com/hatemets">Facebook</a>
						</li>
					</ul>
				</div>
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
