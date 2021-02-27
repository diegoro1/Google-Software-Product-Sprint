import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Card.css';


export default function Card(props) {
    return (
        <div className="card-body">
            <Grid container justify="center">
                <Grid item xs={12}>
                <h1 className="project-title">{props.project.title}</h1>  
                </Grid>
                <Grid item xs={12}>
                    <img src={props.project.img} alt="lpa-project" className="project-img"/>
                </Grid>
                <Grid item xs={12}>
                    <p className="project-description">{props.project.description}</p>
                </Grid>
                <Grid item xs={12}>
                    <p className="project-description">Tech used: {props.project.tech.join(', ')}</p>
                </Grid>
            </Grid>
        </div>
    );
}