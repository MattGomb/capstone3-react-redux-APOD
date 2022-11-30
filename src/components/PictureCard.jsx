import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Films.module.css';

const Picture = (props) => {
  const { picture } = props;
  const {
    title, image,
  } = picture;

  return (
    <div className={style.filmCard}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.detailsPart}>
        <img src={image} alt={title} className={style.image} />
        <Link to={`/details/${title}`}>
          <button className={style.detailBtn} type="submit">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Picture.defaultProps = {
  picture: {},
  title: '',
  image: '',
};

Picture.propTypes = {
  picture: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Picture;
