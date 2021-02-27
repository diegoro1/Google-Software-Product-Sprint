import React, { useState } from 'react';
import './Navbar.css';
import Container from '@material-ui/core/Container'
import logo from '../../assets/logo.png';

export default function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="sticky-nav">
            <Container maxWidth="md">
                <div className="nav">
                    <div className="logo-container">
                        <img src={logo} alt="Diego Rodrigues"/>
                    </div>
                    <div className="nav-links">
                        <p>About</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                </div>
            </Container>
        </div>
    ); 
}