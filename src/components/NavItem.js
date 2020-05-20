import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavItem = ({ isOpened, location, innerText }) => {
  return (
    <motion.li variants={variants}>
      <Link to={location}>{innerText}</Link>
    </motion.li>
  );
};

const variants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
};
