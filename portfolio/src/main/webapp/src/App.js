import React from 'react'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
        <Home />
        <Navbar/>
    </div>
  );
}

export default App;
