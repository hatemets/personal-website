import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { NavLink, Link } from "react-router-dom";
import variables from "../styles/_base.scss";

export const Navbar = () => {
	const [isOpen, toggleMenu] = useCycle(false, true);
	const node = useRef();
	const { color, opacity, navbarHeight } = variables;
	const navigationBarHeight = Number(navbarHeight.slice(0, -2));
	const opaque = `${color}ff`;
	const transparent = color + opacity;

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const rect = document.querySelector(".card").getBoundingClientRect();
			document.querySelector("nav").style.background =
				rect.y < navigationBarHeight ? opaque : transparent;
		});

		const handleClickOutside = e => {
			if (node.current.contains(e.target)) return;
			else toggleMenu();
		};

		if (isOpen) document.addEventListener("mousedown", handleClickOutside);
		else document.removeEventListener("mousedown", handleClickOutside);

		return _ => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, toggleMenu, navigationBarHeight, opacity, color, opaque, transparent]);

	return (
		<motion.nav ref={node} initial={false} animate={isOpen ? "open" : "closed"}>
			<div className="wrapper">
				<Link to="/" className="hide-overflow">
					<svg
						id="brand-logo"
						xlmns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						viewBox="0 0 120 120"
					>
						<path
							d="M 10 80 L 10 20 L 34 58 L 58 14 L 58 80 L 58 50 L 90 50 L 90 14 L 90 80"
							stroke="white"
							stroke-width="5"
							fill="transparent"
						/>
					</svg>
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
						<NavLink activeClassName="active" to="/about">
							About me
						</NavLink>
					</li>
				</ul>

				<MenuIcon toggle={_ => toggleMenu()} />
				<Sidebar className="sidebar" toggle={() => toggleMenu()} />
			</div>
		</motion.nav>
	);
};
