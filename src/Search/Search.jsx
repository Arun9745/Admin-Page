import React from 'react';
import SearchButton from './Searchbutton';


const Search = () => {
  const handleSearch = (query) => {
    // Perform search operation with the query
    console.log('Search query:', query);
  };

  return (

    <div>
      {/* <h1>Search Example</h1> */}
      <SearchButton onSearch={handleSearch} />
      
    </div>
  );
};

export default Search;
