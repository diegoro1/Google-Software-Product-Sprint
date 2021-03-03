import React from 'react'; 
import About from './components/About';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
        <HomePage />
        <About />
        <Projects />
        <Contacts />
    </div>
  );
}

export default App;
