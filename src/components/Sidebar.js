import React from "react";
import { motion } from "framer";
import { NavItems } from "./NavItems";

const sidebar = {
	open: {
		clipPath: "circle(1600px at 0px 0px)",
		transition: {
			stiffness: 30,
			type: "spring"
		}
	},
	closed: {
		clipPath: "circle(0px at 0px 0px)",
		transition: {
			delay: 0.2,
			stiffness: 50,
			type: "spring"
		}
	}
};

export const Sidebar = ({ toggle }) => {
	return (
		<motion.div id="sidebar" variants={sidebar}>
			<ul>
				<NavItems toggle={() => toggle()} />
			</ul>
		</motion.div>
	);
};
