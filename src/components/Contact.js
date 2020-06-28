import React from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const Contact = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	const discordUser = "azucar#0481";

	const handleClick = e => {
		if (e.target.textContent === "Discord") {
			navigator.clipboard.writeText(discordUser);
			document.querySelector(".popup").style.opacity = 1;
			document.querySelector(".popup").style.zIndex = 999;
			console.log("Username copied on your clipboard");

			setTimeout(() => {
				document.querySelector(".popup").style.opacity = 0;
			}, 2000);

			setTimeout(() => {
				document.querySelector(".popup").style.zIndex = -111;
			}, 2300);
		}
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
				<div className="popup">
					<p>Username copied on clipboard</p>
				</div>
				<div className="card">
					<h1 className="title">Contact information</h1>
					<p>
						In case you are interested in hiring me, have me build a website for your company or for
						some other reason, you can contact me via the following mediums:
					</p>
					<ul id="medium-list">
						<li className="email" onClick={handleClick}>
							Email
						</li>
						<li className="facebook" onClick={handleClick}>
							Facebook
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
		</div>
	);
};
