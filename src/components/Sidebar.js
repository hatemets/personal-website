import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";
import { NavItems } from "./NavItems";

const sidebar = {
	open: {
		clipPath: "circle(2000px at 0px 0px)",
		transition: {
			stiffness: 30,
			type: "spring"
		}
	},
	closed: {
		clipPath: "circle(0px at 0px 0px)",
		transition: {
			delay: 0.3,
			stiffness: 50,
			type: "spring"
		}
	}
};

export const Sidebar = ({ isOpened, toggleMenu }) => {
	const handleClick = _ => toggleMenu();

	return (
		<motion.div id="sidebar" variants={sidebar}>
			<ul>
				<NavItems />
			</ul>
		</motion.div>
	);
};
