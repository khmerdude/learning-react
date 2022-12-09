import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home'
import Facts from './pages/Facts'
import AirBnB from './pages/AirBnB';

function App() {
  return (
    <div className="App">
      <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="facts" element={<Facts />}/>
        <Route path="airbnb" element={<AirBnB />}/>
      </Routes>
    </Router>

    </>
     
    </div>
  );
}

export default App;
