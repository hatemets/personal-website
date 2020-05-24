import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";
import { MenuItem } from "./MenuItem";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.2
		}
	},
	closed: {
		transition: {
			staggerChildren: 0.06,
			staggerDirection: -1
		}
	}
};

const items = {
	home: {
		location: "/",
		text: "Home"
	},
	contact: {
		location: "/contact",
		text: "Contact"
	},
	projects: {
		location: "/projects",
		text: "Projects"
	}
};

const entries = Object.entries(items);

export const NavItems = ({ toggle }) => {
	return (
		<motion.ul variants={variants}>
			{entries.map(item => {
				const [name, { location, text }] = item;
				return (
					<MenuItem
						onClick={() => {
							console.log("hello");
							toggle();
						}}
						location={location}
						text={text}
					/>
				);
			})}
		</motion.ul>
	);
};
