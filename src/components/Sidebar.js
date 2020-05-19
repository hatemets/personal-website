import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Sidebar = ({ isOpened, toggleMenu }) => {
  const handleClick = _ => toggleMenu(!isOpened);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0
      }
    },
    closed: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0
      }
    }
  };

  return (
    <motion.div
      id="sidebar"
      className="opened"
      animate={{ x: isOpened ? 0 : -250 }}
      transition={{ delay: 0.1, type: "tween", default: { duration: 0.1 } }}
    >
      <motion.ul variants={variants}>
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
      </motion.ul>
    </motion.div>
  );
};
