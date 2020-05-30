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
					<h1>Contact information</h1>
					<p>
						In case you are interested in hiring me or have me build a website
						for your company, you can contact me via the following mediums:
					</p>
					<ul id="medium-list">
						<li className="email">Email</li>
						<li className="facebook">Facebook</li>
						<li className="discord">Discord</li>
					</ul>
					<p>
						Pricing and other details will be discussed during further
						conversations. It is worth mentioning that since I'm a student, I
						can only work remotely.
					</p>
				</div>
			</motion.div>
		</div>
	);
};
