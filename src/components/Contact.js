import React, { useState } from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";
import { Transition } from "react-transition-group";
import { Popup } from "./Popup";

export const Contact = () => {
	const [visible, setVisible] = useState(false);
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	const discordUser = "azucar#0481";

	const handleClick = _ => {
		navigator.clipboard.writeText(discordUser);
		setVisible(true);
		setTimeout(_ => setVisible(false), 1000);
	};

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
						In case you are interested in hiring me, have me build a website for your company or for
						some other reason, you can contact me via the following mediums:
					</p>
					<ul id="medium-list">
						<li className="email">
							<a href="mailto:heidmetsmark@gmail.com">Email</a>
						</li>
						<li className="facebook">
							<a href="https://www.facebook.com/hatemets">Facebook</a>
						</li>
						<li className="discord" onClick={handleClick}>
							Discord
						</li>
					</ul>
					<p>
						Pricing and other details will be discussed during further conversations. It is worth
						mentioning that since I'm a student, I can only work remotely or work part-time.
					</p>
				</div>
				<div className="card">
					<h1 className="title">Projects</h1>
					<p>Check out my github page to see what I've been doing</p>
					<a className="link" href="https://github.com/hatemets">
						Click here to visit my github account
					</a>
				</div>
			</motion.div>
			<Popup in={visible} text="Username copied to clipboard" />
		</div>
	);
};
