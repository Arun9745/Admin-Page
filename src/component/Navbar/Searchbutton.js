import React, { useState } from 'react';
import './Searchbutton.css';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
   

const SearchButton = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // const handleSearchClick = () => {      
  //   onSearch(query);
  // };

  return (
    <div class='top-nav'>
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Search"
      /> 
      
      <div>
      <NavLink to="/Newsurvey"><button className="search-button" type='Submit' >
        Create new  
      </button></NavLink>
    
      </div>  
      </div>
      

   
     
     </div>
  );
}; 

export default SearchButton;  