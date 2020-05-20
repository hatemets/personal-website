import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";

export const Sidebar = ({ isOpened, toggleMenu }) => {
  const handleClick = _ => toggleMenu(!isOpened);

  return (
    <motion.div id="sidebar">
      <ul>
        <NavItem isOpened={isOpened} location={"/"} innerText={"Home"} />
        <NavItem
          isOpened={isOpened}
          location={"/contact"}
          innerText={"Contact"}
        />
        <NavItem
          isOpened={isOpened}
          location={"/projects"}
          innerText={"Projects"}
        />
      </ul>
    </motion.div>
  );
};
