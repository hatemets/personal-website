import React from "react";
import { motion } from "framer";
import { menuIconValues } from "../assets/animationProperties";

const Path = props => (
  <motion.path
    stroke="white"
    fill="transparent"
    strokeWidth="4"
    strokeLinecap="round"
    {...props}
  />
);

const menuIconVariants = {
  top: {
    open: { d: "M 5 15 l 40 0" },
    closed: { d: "M 8 8 l 34 34" }
  },
  bottom: {
    open: { d: "M 5 35 l 40 0" },
    closed: { d: "M 8 42 l 34 -34" }
  }
};

const { bottom, top } = menuIconVariants;

export const MenuIcon = ({ toggle }) => {
  return (
    <svg
      // id="menu-icon-container"
      width="50"
      height="50"
      onClick={_ => toggle()}
    >
      <Path variants={top} />

      <Path
        d="M 5 25 l 40 0"
        variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
        transition={{ duration: 0.2 }}
      />

      <Path variants={bottom} />
    </svg>
  );
};
