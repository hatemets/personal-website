import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";
import { NavItem } from "./NavItem";

const sidebar = {
  open: {
    clipPath: "circle(1000px at 0px 0px)",
    transition: {
      stiffness: 30,
      type: "spring"
    }
  },
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.3,
      stiffness: 50,
      type: "spring"
    }
  }
};

export const Sidebar = ({ isOpened, toggleMenu }) => {
  const handleClick = _ => toggleMenu();

  return (
    <motion.div id="sidebar" variants={sidebar}>
      <ul>
        <NavItem location={"/"} innerText={"Home"} />
        <NavItem location={"/contact"} innerText={"Contact"} />
        <NavItem location={"/projects"} innerText={"Projects"} />
      </ul>
    </motion.div>
  );
};
