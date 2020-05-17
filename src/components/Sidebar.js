import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Sidebar = ({ isOpened, toggleMenu }) => {
  const handleClick = () => {
    toggleMenu(!isOpened);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpened ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="sidebar"
      className={isOpened ? "visible" : "hidden"}
    >
      <ul>
        <li>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link onClick={handleClick} to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
