/* eslint-disable */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Picture = (props) => {
  const { picture } = props;
  const {
    title, url, media_type, date
  } = picture;

  return (
    <div className="card d-flex flex-column align-items-center col-md-5 col-lg-5">
      <div className="card-title d-flex flex-column align-items-center m-2">
        <h2>{title}</h2>
        <small>({date})</small>
      </div>
      {media_type === 'image' ? (
        <img src={url} alt={title} className="h-lg-50" style={{ maxHeight: '40rem'}} />
      ) : (
        <embed src={url} title={title} className="" />
      )}
      <Link to={`/details/${title}`}>
        <button className="" type="submit">
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
