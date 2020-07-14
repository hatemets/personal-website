import React from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer";
import { Route, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	const location = useLocation();

	return (
		<div id="App">
			<Navbar />
			<div id="main-content">
				<AnimatePresence exitBeforeEnter>
					<ScrollToTop />
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={Home} />
						<Route path="/contact" component={Contact} />
						<Route path="/about" component={About} />
					</Switch>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
};

export default App;
