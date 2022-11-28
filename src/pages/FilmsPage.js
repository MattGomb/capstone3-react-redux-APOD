import React from 'react';
import { useSelector } from 'react-redux';
import FilmsList from '../components/FilmsList';

const FilmsDisplay = () => {
  const films = useSelector((state) => state.films);

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
