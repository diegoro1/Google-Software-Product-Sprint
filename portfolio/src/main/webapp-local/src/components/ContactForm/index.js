import React from 'react';
import './ContactForm.css';
import Grid from '@material-ui/core/Grid';

export default function ContactForm() {
    return (
        <div className="contact-wrapper">
            <h1>Send me a message</h1>
            <iframe name="dummyframe" id="dummyframe" title="dummyframe"></iframe>
            <form action="/form-handler" method="POST" target="dummyframe">
                <Grid container justify="center" spacing={4} alignItems="center">
                    <Grid item xs={12} className="grid-item">
                        <input type="text" placeholder="name" className="input" name="name" />
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-item">
                        <input type="text" placeholder="email" className="input" name="email" />
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-item">
                        <input type="text" placeholder="number" className="input" name="number" />
                    </Grid>
                    <Grid item xs={12} className="grid-item">
                        <textarea type="text" placeholder="Message" className="input" name="message" />
                    </Grid>
                    <br/>
                    <Grid item xs={12} className="btn-wrapper">
                        <input className="submit-btn" type="submit" />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
