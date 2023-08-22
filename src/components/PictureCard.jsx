/* eslint-disable */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Picture = (props) => {
  const { picture } = props;
  const {
    title, url, media_type, date
  } = picture;

  return (
    <div className="card d-flex flex-column col-11 col-sm-10 justify-content-between bg-secondary text-light">
      <div className="card-title d-flex flex-column align-items-center m-2">
        <h2>{title}</h2>
        <small>({date})</small>
      </div>
      {media_type === 'image' ? (
        <img src={url} alt={title} style={{ maxHeight: '38rem', objectFit: 'contain'}} />
      ) : (
        <embed src={url} title={title} style={{ maxHeight: '38rem', objectFit: 'contain'}}/>
      )}
      <Link to={`/details/${title}`} className="align-self-center m-2">
        <button className="btn btn-outline-light" type="submit">
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
