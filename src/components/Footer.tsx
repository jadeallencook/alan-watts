import React from 'react';
import './Footer.scss';
import Logo from '../assets/white-logo.png';

const Footer: React.FC = () => {
    return (
        <div className="Footer">
            <div>
                <div>
                    <img src={Logo} alt="alan watts signature logo" />
                </div><div>
                    <b>Alan Watts Audio Project</b> | Copyright 2020
                </div>
            </div>
        </div>
    );
}

export default Footer;