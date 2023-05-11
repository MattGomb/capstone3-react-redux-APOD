import React from 'react';
import ghibli from '../assets/ghibli.png';

function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div className={style.logoHolder}>
        <img src={ghibli} className={style.logo} alt="Ghibli logo" />
        <h1 className={style.title}>NASA&apos;s Astronomy Picture of the Day</h1>
      </div>
    </nav>
  );
}

export default Navbar;
