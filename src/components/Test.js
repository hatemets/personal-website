import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const Test = () => {

	const text = "Testing page";
	const array = text.split('');
//	console.log(array);	
	const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

	const typer = l => document.querySelector("#typewriter").textContent += l;

	useEffect(() => {
		const typewriter = document.querySelector("#typewriter");
//		array.forEach((char, index) => setTimeout(_ => typewriter.textContent += char, index * 140));
	});
	// Add staggering effect to the children of the container
	const containerVariants = {
before: {},
	after: { transition: { staggerChildren: 0.06 } },
	}

	// Variants for animating each letter
	const letterVariants = {
before: {
opacity: 0,
	 y: 20,
	 transition: {
type: "spring",
      damping: 16,
      stiffness: 200,
	 },
	},
after: {
opacity: 1,
	 y: 0,
	 transition: {
type: "spring",
      damping: 16,
      stiffness: 200,
	 },
       },
	}  


	return (
		<div className="content">
//			<h1 id="text">Testing page</h1>	
			<div style={{ display: "flex", justifyContent: "center" }}
			variants={ containerVariants }
			initial={ "before" }
			animate={ "after" }>
				{array.map((letter, index) => <div
								key={index}
								variants={ letterVariants }
								style={{ fontSize: "40px", position: "relative" }}>
									{letter}
								</div>)}
			</div>	
			<motion.h1
			initial={{ opacity: 0.2}}
			animate={{ opacity: 1 }}
			transition={{ duration: 6 }}
			id="typewriter"></motion.h1>
		</div>
	);
};
