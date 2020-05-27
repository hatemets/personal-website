import React from "react";
import { motion } from "framer";

const Path = props => (
	<motion.path
		stroke="white"
		fill="transparent"
		strokeWidth="2.5"
		strokeLinecap="round"
		{...props}
	/>
);

const menuIconVariants = {
	top: {
		closed: { d: "M 5 11 L 35 11" },
		open: { d: "M 8 8 L 32 32" }
	},
	bottom: {
		closed: { d: "M 5 29 L 35 29" },
		open: { d: "M 8 32 L 32 8" }
	}
};

const { bottom, top } = menuIconVariants;

export const MenuIcon = ({ toggle }) => {
	return (
		<svg
			id="menu-icon-container"
			width="55"
			height="55"
			viewBox="0 0 40 40"
			onClick={_ => toggle()}
		>
			<Path variants={top} />

			<Path
				d="M 5 20 L 35 20"
				variants={{
					closed: { transform: "scale(1)" },
					open: { transform: "scale(0)" }
				}}
				transition={{ duration: 0.1 }}
			/>

			<Path variants={bottom} />
		</svg>
	);
};
