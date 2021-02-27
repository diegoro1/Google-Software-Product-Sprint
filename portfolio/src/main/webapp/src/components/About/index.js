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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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