import React from 'react';
import './Contacts.css';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contacts() {
    return (
        <div className="contacts-container" id="contacts">
            <Container maxWidth="md">
                <h1 className="contact-title">Contact Me</h1>
                <p className="contact-text">Let's collaborate and make the internet a prettier place.</p>
                <p className="contact-text">Find me here</p>
                <div className="contact-links">
                    <InstagramIcon className="icon" fontSize="large" style={{fill: "white"}}/>
                    <LinkedInIcon className="icon" fontSize="large" style={{fill: "white"}}/>
                    <GitHubIcon className="icon" fontSize="large" style={{fill: "white"}}/>
                </div>
            </Container>
        </div>
    );
}