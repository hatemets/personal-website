import React, { useEffect } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer";
import { Route, Switch, useLocation } from "react-router-dom";

const App = ({ hideLoader }) => {
	const location = useLocation();

	useEffect(_ => hideLoader, [hideLoader]);

	return (
		<div id="App">
			<Navbar />
			<div id="main-content">
				<AnimatePresence exitBeforeEnter>
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
