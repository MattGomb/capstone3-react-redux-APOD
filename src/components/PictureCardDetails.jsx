import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const { picture } = props;
  const {
    title,
  } = picture;

  const params = useParams();
  const pictures = useSelector((state) => state.pictures);
  const detailedPictures = pictures.filter((picture) => picture.title === params.title);

  return (
    <div className="card col-11 bg-secondary text-light py-4 px-2">
      {detailedPictures.map((picture) => (
        <div className="" key={picture.title}>
          <h2 className="card-title text-center">{picture.title}</h2>
          <div className="row justify-content-center">
            {picture.media_type === 'image' ? (
              <a href={picture.hdurl} className="col-12 col-sm-11 col-md-10 col-lg-5" target="_blank" rel="noreferrer">
                <img src={picture.hdurl} alt={title} className="w-100" />
              </a>
            ) : (
              <a href={picture.url} target="_blank" rel="noreferrer">
                <embed
                  src={picture.url}
                  title={title}
                  className="col-5"
                />
              </a>
            )}
            <div className="d-flex flex-column justify-content-around col-11 col-sm-11 col-md-10 col-lg-7 gap-4">
              <div className="fw-light">
                <h4>
                  Explanation:
                </h4>
                <br />
                {picture.explanation}
              </div>
              <div className="d-flex justify-content-around">
                {picture.copyright ? (
                  <p>
                    copyright:
                    <br />
                    {picture.copyright}
                  </p>
                ) : <p>copyright: N/A</p>}
                <p>
                  date of APOD:
                  <br />
                  {picture.date}
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
  picture: {},
  title: '',
  copyright: '',
  date: '',
};

Details.propTypes = {
  picture: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  copyright: PropTypes.string,
  date: PropTypes.string,
};

export default Details;
