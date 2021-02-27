import React from 'react';
import Container from '@material-ui/core/Container';
import './Home.css';
import video from './../../assets/home-vid.mp4';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Home() {
    return (
        <div>
            <div className="video-overlay"></div>

            <video className='video' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            
            <h1 className="top-item">Hello, I am a</h1>
            <h1 className="middle-item">Software Developer</h1>
            <h1 className="">focused on making clean, efficient, and beautiful code</h1>

            <div className="scrow-down-container">
                <p>Scrow down</p>
                <KeyboardArrowDownIcon style={{ color: 'white' }}/>
            </div>
        </div>
    );
}