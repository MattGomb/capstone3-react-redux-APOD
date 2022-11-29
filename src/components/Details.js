import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from '../styles/Details.module.css';

const Details = (props) => {
  const { film } = props;
  const {
    title,
  } = film;

  const params = useParams();
  const films = useSelector((state) => state.films);
  const detailedFilms = films.filter((film) => film.id === params.id);

  return (
    <div className={style.filmCard}>
      {detailedFilms.map((film) => (
        <div className={style.filmInnerCard} key={film.id}>
          <h2 className={style.title}>{film.title}</h2>
          <h3 className={style.titleOriginal}>{film.titleOriginal}</h3>
          <div className={style.cardDetails}>
            <img src={film.banner} alt={title} className={style.banner} />
            <div className={style.detailParas}>
              <p className={style.description}>
                Description:
                <br />
                {film.description}
              </p>
              <div className={style.midCol}>
                <div className={style.smallCols}>
                  <p className={style.director}>
                    Director:
                    <br />
                    {film.director}
                  </p>
                  <p className={style.producer}>
                    Producer:
                    <br />
                    {film.producer}
                  </p>
                </div>
                <div className={style.smallCols}>
                  <p className={style.date}>
                    Release Date:
                    <br />
                    {film.date}
                  </p>
                  <p className={style.runtime}>
                    Runtime:
                    <br />
                    {film.runtime}
                  </p>
                </div>
                <p className={`${style.score} ${style.smallCols}`}>
                  RT score:
                  <br />
                  {film.score}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Details.defaultProps = {
  film: {},
  title: '',
  titleOriginal: '',
  banner: '',
  description: '',
  director: '',
  producer: '',
  date: '',
  runtime: '',
  score: '',
};

Details.propTypes = {
  film: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  titleOriginal: PropTypes.string,
  banner: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  date: PropTypes.string,
  runtime: PropTypes.string,
  score: PropTypes.string,
};

export default Details;
