import React from 'react';
import Adding from './Adding Questions/Adding';
// import Side from './Sidebar/Side';
// import Home from './Sidebar/Pages/Home';
// import Reports from './Sidebar/Pages/Reports';
// import Questions from './Sidebar/Pages/Questions';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Search from './Search/Search';
import Navbar from './Sidebar/Components/Navbar';


function
 App() {
  return ( 
   <div>
   <Router>
      <Navbar />
      {/* <Adding /> */}
      <Search />
      {/* <Survey /> */}
      <Routes>
      {/* <Route path='/' exact component={<Home />} /> */}
          <Route path='/Adding' component={<Adding />} /> 
          {/* <Route path='/questions' component={<Questions />} /> */}
          </Routes>
   </Router>
   </div>
  );
  
};

export default App;
