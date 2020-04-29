import React, { useState} from 'react';
import { MenuIcon } from './MenuIcon';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [open, toggle] = useState(false);

    return (
        <nav>
            <div className="wrapper">
                <Link to='/'><img id="brand-logo" src="/images/letterM.png" alt="M"/></Link>
                <ul id="navlist">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                </ul>
				<MenuIcon isOpened = { open } toggleMenu = { toggle } />
            </div>
        </nav>
		
    )
}
