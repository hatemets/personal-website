import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "linear",
			duration: 0.2
		}
	},
	closed: {
		opacity: 0,
		y: 25,
		transition: {
			ease: "linear",
			duration: 0.2
		}
	}
};

export const MenuItem = ({ location, text }) => (
	<motion.li whileHover={{ x: 10 }} variants={itemVariants}>
		<Link className="menu-item" to={location}>
			{text}
		</Link>
	</motion.li>
);
