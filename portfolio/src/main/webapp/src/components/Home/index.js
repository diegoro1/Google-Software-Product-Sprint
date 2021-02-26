import React from 'react';
import './Home.css';
import video from './../../assets/home-vid.mp4';

export default function Home() {
    return (
        <div>
            <div className="video-overlay"></div>

            <video className='video' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            
            
            <div className="home-container">
                <div className="content-box">
                    <h1>Hi, I'm Diego!</h1>
                    <h2>A Web developer foncused on writting</h2>
                    <h2> clean, efficient, and beautiful code</h2>
                    <div className="avatar"></div>
                </div>
            </div>
        </div>
    );
}