import React from 'react';
import style from '../styles/FilmsPage.module.css';

const SearchBar = () => (
  <form action="/" method="get" className={style.searchForm}>
    <label htmlFor="search">
      <input type="text" id={style.search} placeholder="search by title" name="search" />
    </label>
    <button className={style.searchBtn} type="submit">Search</button>
  </form>
);

export default SearchBar;
