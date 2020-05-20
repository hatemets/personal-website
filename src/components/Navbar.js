import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

const sidebarVariants = {
  open: {
    clipPath: "circle(1000px at 0 0)"
    // transition: {
    //   staggerChildren: 0,
    //   delayChildren: 0
    // }
  },
  closed: {
    clipPath: "circle(0px at 0 0)"
    // transition: {
    //   staggerChildren: 0,
    //   delayChildren: 0
    // }
  }
};

export const Navbar = () => {
  const [isOpen, toggleMenu] = useCycle(false, true);

  return (
    <nav>
      <div className="wrapper">
        <Link to="/">
          <img id="brand-logo" src="/images/letterM.png" alt="M" />
        </Link>

        <ul id="navlist">
          <NavItem location={"/"} innerText={"Home"} />
          <NavItem location={"/contact"} innerText={"Contact"} />
          <NavItem location={"/projects"} innerText={"Projects"} />
        </ul>

        <motion.div
          id="small-screen"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <MenuIcon toggle={_ => toggleMenu()} />
          <motion.Sidebar variants={sidebarVariants} />
        </motion.div>
      </div>
    </nav>
  );
};
