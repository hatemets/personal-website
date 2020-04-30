import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation, BrowserRouter } from 'react-router-dom';

const App = _ => {
	return (
		<BrowserRouter>
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/projects' component={Projects}/>
				</Switch>
			</AnimatePresence>
		</BrowserRouter>
	)
}

export default App;
