import React, { useEffect } from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";
import { arrowWidth } from "../styles/_variables.scss";

const Arrow = ({ id }) => (
	<svg id={id} className="arrow" width={arrowWidth.slice(0, -2)} height="100" viewBox="0 0 100 100">
		<path d="M 0 10 l 50 50 l 50 -50 z" fill="#ddd" stroke="white" stroke-width="1"></path>
	</svg>
);

export const Home = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;
	const string = "Hi! I'm Mark";
	const popupString = Array.from(string);

	useEffect(() => {
		const arrow = document.querySelector("#arrow");

		popupString.forEach(letter => {
			if (letter !== " ") {
				const el = document.getElementsByClassName(letter)[0];
				if (letter === "!") el.style.gridArea = "exclm";
				else if (letter === "'") el.style.gridArea = "comma";

				if (!el.style.gridArea.includes("/")) el.style.gridArea = letter;
			}
		});

		document.addEventListener("scroll", _ => {
			try {
				const relativeHeight = document.querySelector("#section-one").getBoundingClientRect().y;
				if (relativeHeight < window.innerHeight) arrow.classList.add("hidden");
				else arrow.classList.remove("hidden");
			} catch {}
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
				delay: indexList[i] * 0.1,
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
		<motion.div id="home">
			<div className="component-container">
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
						<h1 className="title">I'm pleased to see you here!</h1>
						<p>
							Hopefully you'll learn more about me and my doings. You can also take a look at some
							of the projects I've been working on.
						</p>
					</div>

					<div id="arrow">
						<Arrow id="a1" />
						<Arrow id="a2" />
					</div>
				</motion.div>
			</div>

			<section id="section-one">
				<h1>About me</h1>
				<p>
					Who am I, anyway? My name is Mark Heidmets and I'm currently studying at Gustav Adolf
					Grammar School in Tallinn, Estonia. I have been programming for over three years,
					focusing mainly on web design and browser automation.
				</p>
				<div className="s3">
					<div id="img"></div>
				</div>
			</section>

			<div id="image-two" className="image">
				<div className="card">
					<h1>Landing page </h1>
					<p />
					<h1>Just for you</h1>
				</div>
			</div>

			<section id="section-two">
			</section>

			<div id="image-three" className="image">
				<div className="card">
					<h1>Feel free to contact me</h1>
				</div>
			</div>
		</motion.div>
	);
};
