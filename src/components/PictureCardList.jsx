import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Picture from './PictureCard';
import {
  fetchTodayApod, fetchRandom1Apod, fetchRandom20Apod, fetchDate,
} from '../redux/pictures/PicturesSlice';

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

  useEffect(() => {
    dispatch(fetchTodayApod());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchDate(date));
  };

  return (
    <section className="d-flex flex-column align-items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="date" className="" onChange={(e) => setDate(e.target.value)} />
          <button type="submit">Date!</button>
        </form>
        <button type="button" onClick={onClickRefresh1}>Give me a random entry!</button>
        <button type="button" onClick={onClickRefresh20}>Give me 20 randoms!</button>
      </div>
      <div className="">
        {pictureslist.map((picture) => (
          <Picture picture={picture} key={picture.title} />
        ))}
      </div>
    </section>
  );
};

export default PicturesList;
