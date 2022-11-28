import React from 'react';
import SearchBar from './Search';
import style from '../styles/Navbar.module.css';
import ghibli from '../assets/ghibli.png';

function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div className={style.logoHolder}>
        <img src={ghibli} className={style.logo} alt="Ghibli logo" />
        <h1 className={style.title}>Studio Ghibli Movies</h1>
      </div>
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
