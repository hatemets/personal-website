import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const [isOpen, toggleMenu] = useCycle(false, true);

  // useEffect(_ => {
  //   console.log(isOpen);
  // });

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <div className="wrapper">
        <Link to="/">
          <img id="brand-logo" src="/images/letterM.png" alt="M" />
        </Link>

        {/*   <ul id="navlist"> */}
        {/*     <NavItem location={"/"} innerText={"Home"} /> */}
        {/*     <NavItem location={"/contact"} innerText={"Contact"} /> */}
        {/*     <NavItem location={"/projects"} innerText={"Projects"} /> */}
        {/*   </ul> */}

        <MenuIcon toggle={_ => toggleMenu()} />
        <Sidebar className="sidebar" />
      </div>
    </motion.nav>
  );
};
