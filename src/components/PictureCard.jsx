import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Films.module.css';

const Picture = (props) => {
  const { picture } = props;
  const {
    title, image, type,
  } = picture;

  return (
    <div className={style.pictureCard}>
      <h2 className={style.title}>{title}</h2>
      {type === 'image' ? (
        <img src={image} alt={title} className={style.image} />
      ) : (
        <embed src={image} title={title} className={style.image} />
      )}
      <Link to={`/details/${title}`}>
        <button className={style.detailBtn} type="submit">
          Details
        </button>
      </Link>
    </div>
  );
};

Picture.defaultProps = {
  picture: {},
  title: '',
  image: '',
  type: '',
};

Picture.propTypes = {
  picture: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default Picture;
