import React from 'react';
import './Header.scss';
import Logo from '../assets/white-logo.png';

const Header: React.FC = () => {
    return (
        <div className="Header animated fadeIn">
            <div></div>
            <div>
                <p className="animated fadeInDown">The recorded works of</p>
                <img src={Logo} className="animated flipInX" alt="alan watts signature" />
                <br /><br />
                <a href="https://alan-watts-electronic-university.myshopify.com" className="animated fadeIn" rel="noopener noreferrer" target="_blank">Audio Downloads</a>
                <a href="https://www.alanwatts.org/" className="animated fadeIn" rel="noopener noreferrer" target="_blank">Alan Watts Organization</a>
            </div>
        </div>
    );
}

export default Header;