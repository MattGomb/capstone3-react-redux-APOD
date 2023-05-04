import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Picture from './PictureCard';
import style from '../styles/Films.module.css';

const PicturesList = () => {
  const [date, setDate] = useState('');
  const [search, setSearch] = useState('');
  const pictureslist = useSelector((state) => state.pictures);

  let filteredPictures = pictureslist;
  if (date !== '') {
    filteredPictures = pictureslist.filter((picture) => picture.date === date);
  }

  return (
    <section className="d-flex flex-column align-items-center">
      <div>
        <input type="date" className={style.searchBar} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className={style.picturesList}>
        {filteredPictures.map((picture) => (
          <Picture picture={picture} key={picture.date} />
        ))}
      </div>
    </section>
  );
};

export default PicturesList;
