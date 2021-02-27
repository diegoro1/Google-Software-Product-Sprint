import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import profilePicture from '../../assets/DiegoLinkedIn-08.jpg';
import './About.css';

export default function About() {
    return (
        <div className="bg space-above">
            <Container maxWidth="md">
                <div className="content-container">
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} md={6}>
                            <div className="title">About me</div>
                            <div className="about-box">
                                I am a Computer Engineering student at the University of Central Florida with a gigantic passion for Web Development. I am passionate about using both computer science and mathematics to develop designs with the best toolset possible as well as I am constantly looking to learn new technologies in order to better efficiency and delivery of projects while amplifying my leadership and personal skills.
                            </div>
                            <div className="about-box">
                                My goal is to not only become the best developer I could possibly be but to better our society through ethics, diversity, and inclusion. My projects directly align with those principles, and I will continue working to develop a better tomorrow.
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="my-picture">
                                <img src={profilePicture} alt="my-picture" width="300"/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}