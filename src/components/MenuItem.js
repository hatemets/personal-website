import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "linear"
		}
	},
	closed: {
		opacity: 0,
		y: 25,
		transition: {
			ease: "linear"
		}
	}
};

export const MenuItem = ({ location, text }) => {
	return (
		<motion.li whileHover={{ x: 15 }} variants={itemVariants}>
			<Link to={location}>{text}</Link>
		</motion.li>
	);
};
