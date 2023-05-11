/* eslint-disable */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Picture = (props) => {
  const { picture } = props;
  const {
    title, url, media_type, date
  } = picture;

  return (
    <div className={style.pictureCard}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <small>({date})</small>
      </div>
      {media_type === 'image' ? (
        <img src={url} alt={title} className={style.image} />
      ) : (
        <embed src={url} title={title} className={style.image} />
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
  url: '',
  media_type: '',
  date: '',
};

Picture.propTypes = {
  picture: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  url: PropTypes.string,
  media_type: PropTypes.string,
  date: PropTypes.string,
};

export default Picture;
