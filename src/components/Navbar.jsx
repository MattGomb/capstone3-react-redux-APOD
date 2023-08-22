import React from 'react';
import ghibli from '../assets/ghibli.png';

function Navbar() {
  return (
    <nav className="">
      <div className="d-flex align-items-center justify-content-center gap-4 bg-primary" style={{ height: '4rem' }}>
        <img src={ghibli} className="h-100" alt="Ghibli logo" />
        <p className="fs-3 m-0 text-light">NASA&apos;s Astronomy Picture of the Day</p>
      </div>
    </nav>
  );
}

export default Navbar;
