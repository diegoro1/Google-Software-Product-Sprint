import React from 'react'; 
import About from './components/About';
import HomePage from './components/HomePage';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
        <HomePage />
        <About />
    </div>
  );
}

export default App;
