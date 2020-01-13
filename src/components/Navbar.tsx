import React from 'react';
import './Navbar.scss';
import Logo from '../assets/white-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="Navbar">
            <div id="navbar-logo">
                <img src={Logo} alt="alan watts signature logo" />
            </div>
        </nav>
    );
}

export default Navbar;