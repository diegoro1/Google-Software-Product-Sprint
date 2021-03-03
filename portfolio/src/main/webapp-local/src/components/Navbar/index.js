import React, { useState } from 'react';
import './Navbar.css';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/logo-white.png';

export default function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="sticky-nav">
            <Container maxWidth="md">
                <div className="nav">
                    <div className="logo-container">
                        <img src={logo} width={120}alt="Diego Rodrigues"/>
                    </div>
                    <div className={click ? "nav-links active" : "nav-links"}>
                        <p className="nav-link" onClick={closeMobileMenu}>About</p>
                        <p className="nav-link" onClick={closeMobileMenu}>Projects</p>
                        <p className="nav-link" onClick={closeMobileMenu}>Contact</p>
                    </div>
                    <div className="mobile-menu" onClick={handleClick}>
                        {
                            click ? (<CloseIcon className="menu-icon"/>) :
                                    (<MenuIcon className="menu-icon"/>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    ); 
}