import React from 'react';

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="search">
      <input type="text" id="search" placeholder="search by title" name="search" />
    </label>
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
