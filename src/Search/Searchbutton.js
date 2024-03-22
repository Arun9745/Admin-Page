import React, { useState } from 'react';
import './Searchbutton.css';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
   

const SearchButton = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {      
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Check your Survey..."
      />
      <div>
      <NavLink to="/Adding"><button className="search-button" onClick={onsubmit} >
        Create new  
      </button></NavLink>
    
      </div>  
      
    </div>
  );
};

export default SearchButton;