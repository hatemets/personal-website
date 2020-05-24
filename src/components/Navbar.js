import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

export const Navbar = () => {
	const [isOpen, toggleMenu] = useCycle(false, true);
	const node = useRef();

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) return;
		else toggleMenu();
	};

	useEffect(() => {
		if (isOpen) document.addEventListener("mousedown", handleClickOutside);
		else document.removeEventListener("mousedown", handleClickOutside);

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
					<NavItems location={"/"} innerText={"Home"} />
				</ul>

				<MenuIcon toggle={_ => toggleMenu()} />
				<Sidebar className="sidebar" toggle={() => toggleMenu()} />
			</div>
		</motion.nav>
	);
};
