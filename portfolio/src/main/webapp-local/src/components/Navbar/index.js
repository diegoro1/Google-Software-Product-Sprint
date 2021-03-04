import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
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
                        <Link 
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link" 
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={750}
                            className="nav-link" 
                            onClick={closeMobileMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={1000}
                            className="nav-link" 
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
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