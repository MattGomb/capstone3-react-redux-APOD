import PropTypes from 'prop-types';

const Film = (props) => {
  const { film } = props;
  const {
    title, titleOriginal, image, banner, description, director, producer, date, runtime, score,
  } = film;

  return (
    <div className={style.filmCard}>
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.titleOriginal}>{titleOriginal}</h3>
      <img src={image} alt={title} className={style.image} />
      <img src={banner} alt={title} className={style.banner} />
      <p className={`${style.description} ${style.details}`}>{description}</p>
      <p className={`${style.director} ${style.details}`}>{director}</p>
      <p className={`${style.producer} ${style.details}`}>{producer}</p>
      <p className={`${style.date} ${style.details}`}>{date}</p>
      <p className={`${style.runtime} ${style.details}`}>{runtime}</p>
      <p className={`${style.score} ${style.details}`}>{score}</p>
    </div>
  );
};

Film.defaultProps = {
  film: {},
  title: '',
  titleOriginal: '',
  image: '',
  banner: '',
  description: '',
  director: '',
  producer: '',
  date: '',
  runtime: '',
  score: '',
};

Film.propTypes = {
  film: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  titleOriginal: PropTypes.string,
  image: PropTypes.string,
  banner: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  date: PropTypes.string,
  runtime: PropTypes.string,
  score: PropTypes.string,
};

export default Film;
