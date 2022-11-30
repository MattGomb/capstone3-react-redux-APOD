import React from 'react';
import PropTypes from 'prop-types';
import Picture from './PictureCard';
import style from '../styles/Films.module.css';

const PicturesList = (props) => {
  const { pictures } = props;

  return (
    <section className={style.filmsList}>
      {pictures.map((picture) => (
        <Picture picture={picture} key={picture.date} />
      ))}
    </section>
  );
};

PicturesList.defaultProps = {
  pictures: [],
};

PicturesList.propTypes = {
  pictures: PropTypes.instanceOf(Array),
};

export default PicturesList;
