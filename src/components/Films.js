import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Films.module.css';

const Film = (props) => {
  const { film } = props;
  const {
    id, title, titleOriginal, image, director, date,
  } = film;

  return (
    <div className={style.filmCard}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.titleOriginal}>
        (
        {titleOriginal}
        )
      </p>
      <div className={style.detailsPart}>
        <img src={image} alt={title} className={style.image} />
        <div className={style.detailsText}>
          <p className={style.director}>
            Director:
            <br />
            {director}
          </p>
          <p className={style.date}>
            Year:
            <br />
            {date}
          </p>
          <Link to="details" state={id} key={id}>
            <button className={style.detailBtn} type="submit">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Film.defaultProps = {
  film: {},
  title: '',
  titleOriginal: '',
  image: '',
  director: '',
  date: '',
  id: '',
};

Film.propTypes = {
  film: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  titleOriginal: PropTypes.string,
  image: PropTypes.string,
  director: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
};

export default Film;
