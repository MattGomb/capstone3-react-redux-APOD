import PropTypes from 'prop-types';

const Film = (props) => {
  const { film } = props;
  const {
    title, titleOriginal, image, banner, description, director, producer, date, runtime, score,
  } = film;

  return (
    <div>
      <h2>{title}</h2>
      <h3>{titleOriginal}</h3>
      <img src={image} alt={title} />
      <img src={banner} alt={title} />
      <p>{description}</p>
      <p>{director}</p>
      <p>{producer}</p>
      <p>{date}</p>
      <p>{runtime}</p>
      <p>{score}</p>
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
