import React from 'react';
import Home from '../Home';
import Navbar from '../Navbar';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="full-screen">
            <Navbar/>
            <Home />
        </div>
    );
}