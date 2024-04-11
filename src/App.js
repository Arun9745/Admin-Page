import React from 'react';

// import Side from './Sidebar/Side';
// import Home from './Sidebar/Pages/Home';
// import Reports from './Sidebar/Pages/Reports';
// import Questions from './Sidebar/Pages/Questions';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Layout from './component/layout/Layout';
import Report from './pages/Report/Report';
import Survey from './pages/Survey/Survey';
import Sheets from './pages/Sheets/Sheets';
import Surveysheets from './pages/Surveysheets/Surveysheets'
import Newsurvey from './pages/Newsurvey/Newsurvey';
import Dashboard from './pages/Dashboard/Dashboard';

function
 App() {
  return ( 
   <div>
   <Router>
      <Layout />
      
     
      <Routes>
           <Route path='/Report' element={<Report />} />
           <Route path='/Survey' element={<Survey />} />
           <Route path='/Sheets' element={<Sheets />} />
           <Route path='/Surveysheets' element={<Surveysheets />} />
           <Route path='/Newsurvey' element={<Newsurvey/>} />
           <Route path='/Dashboard' element={<Dashboard />} />
        
       </Routes>
         
   </Router>
   </div>
  );
  
};

export default App;  
