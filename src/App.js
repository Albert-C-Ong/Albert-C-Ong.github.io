/*
Written by Albert Ong

Created: 2023.08.18
*/

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import About from './About';


function App() {

  document.title = 'Albert Ong';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
