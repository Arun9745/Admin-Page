import React from 'react';
import './Side.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Questions';

function Side() {
  return (
    <>
      {/* <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact component={<Home />} />
          <Route path='/reports' component={<Reports />} />
          <Route path='/products' component={<Products />} />
          </Routes>
      </Router> */}
     
    </>
  );
}

export default Side;