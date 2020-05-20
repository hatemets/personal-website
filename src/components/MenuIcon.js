import React from "react";
import { motion } from "framer-motion";
import { menuIconValues } from "../assets/animationProperties";

const Path = props => (
  <motion.path
    stroke="white"
    fill="transparent"
    strokeWidth="4"
    strokeLinecap="round"
    {...props}
  ></motion.path>
);

export const MenuIcon = ({ toggle }) => {
  return (
    <div
      onClick={_ => toggle()}
      id="menu-icon-container"
      className="container"
    >
      <svg id="menu-icon">
        <Path d="M 8 14 L 40 10" />
        <Path d="M 8 28 L 40 20" />
        <Path d="M 8 42 L 40 30" />
      </svg>
    </div>
  );
};
