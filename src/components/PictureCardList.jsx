import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Picture from './PictureCard';
import {
  fetchTodayApod, fetchRandom1Apod, fetchDate,
} from '../redux/pictures/PicturesSlice';

const PicturesList = () => {
  const [date, setDate] = useState('');
  const pictureslist = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

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
      <div className="row gap-4 mb-5 justify-content-center w-75">
        <form onSubmit={handleSubmit} className="d-flex justify-content-around col-12 col-sm-10 col-md-3 col-lg-3">
          <input type="date" className="" onChange={(e) => setDate(e.target.value)} />
          <button type="submit" className="btn btn-outline-secondary text-light fs-4">Date!</button>
        </form>
        <button className="btn btn-outline-secondary text-light col-11 col-sm-10 col-md-3 col-lg-3 fs-4" type="button" onClick={onClickRefresh1}>Give me a random entry!</button>
      </div>
      <div className="row w-100 gap-2 justify-content-center">
        {pictureslist.map((picture) => (
          <Picture picture={picture} key={picture.title} />
        ))}
      </div>
    </section>
  );
};

export default PicturesList;
