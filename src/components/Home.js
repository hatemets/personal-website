import React, { useEffect } from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const Home = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	const string = "Hi! I'm Mark";
	const popupString = Array.from(string);

	useEffect(() => {
		const string = "Hi! I'm Mark";

		Array.from(string).forEach(letter => {
			if (letter !== " ") {
				const el = document.getElementsByClassName(letter)[0];
				if (letter === "!") el.style.gridArea = "exclm";
				else if (letter === "'") el.style.gridArea = "comma";

				if (!el.style.gridArea.includes("/")) {
					el.style.gridArea = letter;
				}
				console.log(el.style.gridArea);
			}
		});
	});

	const variants = {
		before: {
			opacity: 0,
			scale: 3,
			filter: "blur(5px)",
			transition: {
				ease: "easeOut"
			}
		},
		after: i => ({
			opacity: 1,
			scale: 1,
			filter: "blur(0)",
			transition: {
				delay: indexList[i] * 0.08,
				ease: "easeOut"
			}
		})
	};

	let indexList = [];

	while (indexList.length < popupString.length) {
		const index = Math.floor(Math.random() * popupString.length);
		if (!indexList.includes(index)) indexList.push(index);
	}

	return (
		<motion.div>
			<div id="image-one" className="image">
				<motion.div
					initial="initial"
					animate="in"
					exit="out"
					variants={pageVariants}
					transition={pageTransition}
					className="content"
				>
					<motion.div className="card" id="popup-text-container">
						{popupString.map((letter, i) => (
							<motion.div
								className={letter}
								id="letter"
								custom={i}
								initial={"before"}
								animate={"after"}
								variants={variants}
							>
								{letter === " " ? "\u00A0" : letter}
							</motion.div>
						))}
					</motion.div>
					<div className="card">
						<h1>Thank you for visiting my website!</h1>
						<p>
							Here you can find out more about who I am and what I do. In
							addition, you can also take a look at some of the projects I've
							been working on.
						</p>
					</div>
				</motion.div>
			</div>

			<section id="section-one">
				<h1>About me</h1>
				<p>
					Who am I, anyway? My name is Mark Heidmets and I'm currently studying
					at Gustav Adolf Grammar School in Tallinn, Estonia. I have been
					programming for approximately two years, focusing mainly on web
					design and browser automation.
				</p>
				<div className="s3"></div>
			</section>

			<div id="image-two" className="image"></div>

			<section id="section-two">
				<h1>Some Cool Text</h1>
				<p>
					Irure nisi esse aliqua dolore culpa esse non incididunt sunt ipsum.
					Sit eiusmod minim do nisi ut occaecat mollit sint amet ea. Do aliqua
					reprehenderit cupidatat ullamco ipsum. Id anim ipsum voluptate ipsum
					proident cupidatat dolor do ullamco. Nisi commodo deserunt Lorem
					Lorem magna esse nostrud irure.
				</p>
			</section>
		</motion.div>
	);
};
