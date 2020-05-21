import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";

const variants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
};

export const NavItem = ({ location, innerText }) => {
  return (
    <motion.li variants={variants}>
      <Link to={location}>{innerText}</Link>
    </motion.li>
  );
};
