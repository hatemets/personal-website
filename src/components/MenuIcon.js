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
    open: { d: "M 5 11 L 35 11" },
    closed: { d: "M 8 8 L 32 32" }
  },
  bottom: {
    open: { d: "M 5 29 L 35 29" },
    closed: { d: "M 8 32 L 32 8" }
  }
};

const { bottom, top } = menuIconVariants;

export const MenuIcon = ({ toggle }) => {
  return (
    <svg
      // id="menu-icon-container"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      onClick={_ => toggle()}
    >
      <Path variants={top} />

      <Path
        d="M 5 20 L 35 20"
        variants={{
          open: { transform: "scale(1)" },
          closed: { transform: "scale(0)" }
        }}
        transition={{ duration: 0.1 }}
      />

      <Path variants={bottom} />
    </svg>
  );
};
