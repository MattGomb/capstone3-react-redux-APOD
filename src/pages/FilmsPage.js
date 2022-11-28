import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmsList from '../components/FilmsList';
import { fetchFilms } from '../redux/films/Films';

const FilmsDisplay = () => {
  const films = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <section>
      <h2>Films</h2>
      <ul>
        <FilmsList films={films} />
      </ul>
    </section>
  );
};

export default FilmsDisplay;
