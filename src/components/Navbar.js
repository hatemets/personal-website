import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div className="wrapper">
                <Link to='/'>MARK</Link>
                <ul id="navlist">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                </ul>
            </div>
        </nav>
    )
}
