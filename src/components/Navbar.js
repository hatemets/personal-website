import React, { useState} from 'react';
import { MenuIcon } from './MenuIcon';
import { Link } from 'react-router-dom';
import { MenuIcon2 } from './MenuIcon2';

export const Navbar = () => {
	const [closed, toggle] = useState(false);

	return (
			<nav>
				<div className="wrapper">
					<Link to='/'><img id="brand-logo" src="/images/letterM.png" alt="M"/></Link>
					<ul id="navlist">
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/projects'>Projects</Link></li>
					</ul>
					<MenuIcon isClosed={closed} toggleMenu={toggle} />
					<MenuIcon2 isClosed={closed} toggleMenu={toggle} />		
				</div>
			</nav>

	       )
}
