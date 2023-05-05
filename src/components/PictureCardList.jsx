import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Picture from './PictureCard';
import style from '../styles/Films.module.css';
import { fetchRandom1Apod, fetchRandom20Apod } from '../redux/pictures/PicturesSlice';

const PicturesList = () => {
  const [date, setDate] = useState('');
  const pictureslist = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  const onClickRefresh20 = () => {
    dispatch(fetchRandom20Apod());
  };

  const onClickRefresh1 = () => {
    dispatch(fetchRandom1Apod());
  };

  if (date !== '') {
    pictureslist.filter((picture) => picture.date === date);
  }

  return (
    <section className="d-flex flex-column align-items-center">
      <div>
        <input type="date" className={style.searchBar} onChange={(e) => setDate(e.target.value)} />
        <button type="button" onClick={onClickRefresh1}>Give me a random entry!</button>
        <button type="button" onClick={onClickRefresh20}>Give me 20 randoms!</button>
      </div>
      <div className={style.picturesList}>
        {!pictureslist.length ? (
          <Picture picture={pictureslist} />
        ) : (
          pictureslist.map((picture) => (
            <Picture picture={picture} key={picture.title} />
          )))}
      </div>
    </section>
  );
};

export default PicturesList;
