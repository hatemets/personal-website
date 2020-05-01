import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = _ => {
	const location = useLocation();
	
	return (
		<div id="App">
			<Navbar />
			<AnimatePresence>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/projects' component={Projects}/>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App;
