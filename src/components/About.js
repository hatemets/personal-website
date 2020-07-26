import React, { useEffect } from "react";
import { motion } from "framer";
import { pageAnimation } from "../assets/animationProperties";

export const About = () => {
	const { variants: pageVariants, transition: pageTransition } = pageAnimation;

	useEffect(() => {
		const gridItems = document.querySelector("#about-container").children;
		for (const el of gridItems) el.style.gridArea = el.id;
	});

	return (
		<div id="about" className="component-container">
			<motion.div
				initial="out"
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
				className="content"
			>
				<div id="about-container" className="card">
					<h1 id="t1" className="title">
						About me
						<h3 className="subtitle">A more detailed introduction</h3>
					</h1>
					<p id="p1">
						My name is Mark Heidmets and I live in Tallinn, Estonia. I'm currently studying in
						Gustav Adolf Grammar School and am graduating high school in 2021. I've been practicing
						coding for 3 years, specializing in web design and browser automation. I'm passionate
						about learning new technologies and concepts every day.
					</p>
					<br className="break" />
					<div id="image"></div>

					<h1 id="t2" className="title">
						Track & Field
					</h1>
					<p id="p2">
						Outside school and programming, I do track. Sprinting, which is the main event I compete
						in, has played a huge role in my life, either by improving my discipline, gaining new
						relations or making me more resilient. I look forward to continuing with track in
						college as well for it is an activity that I've been doing for over 7 years by now.
					</p>
					<h3 id="t3">Personal bests</h3>
					<table id="tb">
						<tr>
							<th>Event</th>
							<th>Time</th>
						</tr>
						<tr>
							<td>60m</td>
							<td>7.07</td>
						</tr>
						<tr>
							<td>100m</td>
							<td>11.09</td>
						</tr>
						<tr>
							<td>200m</td>
							<td>22.55</td>
						</tr>
						<tr>
							<td>400m</td>
							<td>49.91</td>
						</tr>
					</table>
				</div>
			</motion.div>
		</div>
	);
};
