import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { NavLink, Link } from "react-router-dom";
import { NavItems } from "./NavItems";

export const Navbar = () => {
	const [isOpen, toggleMenu] = useCycle(false, true);
	const node = useRef();
	const footer = document.querySelector("footer");

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) return;
		else toggleMenu();
	};

	useEffect(() => {
		if (isOpen) {
			footer.style.zIndex = "-1";
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.querySelector("footer").style.zIndex = "1";
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return _ => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<motion.nav
			ref={node}
			initial={false}
			animate={isOpen ? "open" : "closed"}
		>
			<div className="wrapper">
				<Link to="/">
					<img id="brand-logo" src="/images/letterM.png" alt="M" />
				</Link>

				<ul id="navlist">
					<li>
						<NavLink exact activeClassName="active" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/contact">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/projects">
							Projects
						</NavLink>
					</li>
				</ul>

				<MenuIcon toggle={_ => toggleMenu()} />
				<Sidebar className="sidebar" toggle={() => toggleMenu()} />
			</div>
		</motion.nav>
	);
};
