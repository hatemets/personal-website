import React from "react";
import { motion } from "framer-motion";
import { menuIconValues } from "../assets/animationProperties";

export const MenuIcon = ({ isOpened, toggleMenu }) => {
  const { initial, open, closed } = menuIconValues;
  const { top, center, bottom } = isOpened ? closed : open;

  return (
    <div
      onClick={_ => toggleMenu(!isOpened)}
      id="menu-icon-container"
      className="container"
    >
      <svg id="menu-icon">
        <motion.rect
          initial={initial}
          animate={top}
          width="40"
          height="3"
          rx="3"
        ></motion.rect>

        <motion.rect
          initial={initial}
          animate={center}
          width="40"
          height="3"
          rx="3"
        ></motion.rect>

        <motion.rect
          initial={initial}
          animate={bottom}
          width="40"
          height="3"
          rx="3"
        ></motion.rect>
      </svg>
    </div>
  );
};
