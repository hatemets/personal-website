import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

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

				{/* <ul id="navlist"> */}
				{/* 	<NavItems location={"/"} innerText={"Home"} /> */}
				{/* </ul> */}

				<MenuIcon toggle={_ => toggleMenu()} />
				<Sidebar className="sidebar" toggle={() => toggleMenu()} />
			</div>
		</motion.nav>
	);
};
