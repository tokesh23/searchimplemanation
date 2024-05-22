import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
