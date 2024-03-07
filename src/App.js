import React from 'react';
import Adding from './Adding Questions/Adding';
// import Side from './Sidebar/Side';
import Home from './Sidebar/Pages/Home';
import Reports from './Sidebar/Pages/Reports';
import Questions from './Sidebar/Pages/Questions';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Sidebar/Components/Navbar';

function App() {
  return ( 
   <div>
   <Router>
      <Navbar />
      <Adding />
      <Routes>
      <Route path='/' exact component={<Home />} />
          <Route path='/survey' component={<Reports />} />
          <Route path='/questions' component={<Questions />} />
          </Routes>
   </Router>
   </div>
  );
  
};

export default App;
