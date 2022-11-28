import React from 'react';
import PropTypes from 'prop-types';
import Film from './Films';
import style from '../styles/Films.module.css';

const FilmsList = (props) => {
  const { films } = props;

  return (
    <section className={style.filmsList}>
      {films.map((film) => (
        <Film film={film} key={film.id} />
      ))}
    </section>
  );
};

FilmsList.defaultProps = {
  films: [],
};

FilmsList.propTypes = {
  films: PropTypes.instanceOf(Array),
};

export default FilmsList;
