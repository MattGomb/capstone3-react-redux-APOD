import React from 'react';
import PropTypes from 'prop-types';
import Film from './Films';

const FilmsList = (props) => {
  const { films } = props;
  return (
    <li>
      {films.map((film) => (
        <Film film={film} key={film.id} />
      ))}
    </li>
  );
};

FilmsList.defaultProps = {
  films: [],
};

FilmsList.propTypes = {
  films: PropTypes.instanceOf(Array),
};

export default FilmsList;
