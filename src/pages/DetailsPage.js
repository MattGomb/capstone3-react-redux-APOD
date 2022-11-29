import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Details from '../components/Details';
import { fetchFilms } from '../redux/films/Films';
import style from '../styles/Details.module.css';

const DetailsDisplay = () => {
  const films = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <section className={style.detailsContainer}>
      <Link to="/">
        <div className={style.backSign}>Back</div>
      </Link>
      <div>
        <Details films={films} />
      </div>
    </section>
  );
};

export default DetailsDisplay;
