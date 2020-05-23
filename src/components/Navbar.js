import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

export const Navbar = () => {
	const [isOpen, toggleMenu] = useCycle(false, true);

	return (
		<motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
			<div className="wrapper">
				<Link to="/">
					<img id="brand-logo" src="/images/letterM.png" alt="M" />
				</Link>

				{/*   <ul id="navlist"> */}
				{/*     <NavItems location={"/"} innerText={"Home"} /> */}
				{/*   </ul> */}

				<MenuIcon toggle={_ => toggleMenu()} />
				<Sidebar className="sidebar" />
			</div>
		</motion.nav>
	);
};
