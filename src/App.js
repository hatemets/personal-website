import React, { useEffect, useLayoutEffect } from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import variables from './styles/_base.scss';

const App = () => {
	const location = useLocation();
	const navigationBarHeight = Number(variables.navbarHeight.slice(0, -2));
	const color = variables.mainColor;
	
	useEffect(_ => {
		let navigationBar = document.querySelector('nav');

		document.addEventListener('scroll', () => {
			let content = document.querySelector('.card');
			let rect = content.getBoundingClientRect();
			navigationBar.style.background = rect.y < navigationBarHeight ? color : color + "bb";
		});
	});

	return (
		<div id="App">
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={Home}/>
					<Route path='/contact' component={About}/>
					<Route path='/projects' component={Projects}/>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App;
