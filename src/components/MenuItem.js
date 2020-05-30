import React from "react";
import { NavLink } from "react-router-dom";
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
		<NavLink exact className="menu-item" to={location}>
			{text}
		</NavLink>
	</motion.li>
);
