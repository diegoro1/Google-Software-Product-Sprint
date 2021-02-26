import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="nav">
            <p>About</p>
            <p>Skills</p>
            <div className="logo-container">
                <img src={logo} alt="Diego Rodrigues"/>
            </div>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    ); 
}