import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home'
import Facts from './pages/Facts'

function App() {
  return (
    <div className="App">
      <>
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="facts" element={<Facts />}/>
      </Routes>
    </Router>

    </>
     
    </div>
  );
}

export default App;
