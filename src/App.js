import React, { useEffect } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer";
import { Route, Switch, useLocation } from "react-router-dom";
import variables from "./styles/_base.scss";

const App = () => {
  const location = useLocation();
  const { color, opacity, navbarHeight } = variables;
  const navigationBarHeight = Number(navbarHeight.slice(0, -2));

  useEffect(_ => {
    const navigationBar = document.querySelector("nav");

    document.addEventListener("scroll", () => {
      const content = document.querySelector(".card");
      const rect = content.getBoundingClientRect();
      navigationBar.style.background =
        rect.y < navigationBarHeight ? color : color + opacity;
    });
  });

  return (
    <div id="App">
      <Navbar />
      <div id="main-content">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/contact" component={About} /> */}
            {/* <Route path="/projects" component={Projects} /> */}
          </Switch>
        </AnimatePresence>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
