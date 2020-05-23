import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";

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

export const NavItems = () => {
	return (
		<motion.ul variants={variants}>
			{entries.map(item => {
				const [name, { location, text }] = item;
				// console.log(items);
				return (
					<motion.li variants={itemVariants}>
						<Link to={location}>{text}</Link>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};
