import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const items = {
  home: {
    location: "/",
    text: "Home"
  },
  contact: {
    location: "/contact",
    text: "Contact"
  },
  projects: {
    location: "/projects",
    text: "Projects"
  }
};

const entries = Object.entries(items);

export const NavItem = () => {
  return (
    <ul>
      {entries.map(item => {
        const [name, { location, text }] = item;
        console.log(items);
        return (
          <motion.li>
            <Link to={location}>{text}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};
