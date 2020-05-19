import React, { useState, useEffect } from "react";
import { MenuIcon } from "./MenuIcon";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [opened, toggle] = useState(false);

  useEffect(_ => {
    // document.addEventListener("click", _ => {
    //   const sidebar = document.querySelector("#sidebar");
    //   sidebar.classList = !opened ? "opened" : "closed";
    // });

    console.log("Is opened:", opened);
    console.log(document.querySelector("#sidebar").classList[0]);
    console.log("-".repeat(35));
  });

  return (
    <nav>
      <div className="wrapper">
        <Link to="/">
          <img id="brand-logo" src="/images/letterM.png" alt="M" />
        </Link>

        <ul id="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <MenuIcon isOpened={opened} toggleMenu={toggle} />
        <Sidebar isOpened={opened} toggleMenu={toggle} />
      </div>
    </nav>
  );
};
