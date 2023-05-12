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
    <div className="">
      {detailedPictures.map((picture) => (
        <div className="" key={picture.title}>
          <h2 className="">{picture.title}</h2>
          <div className="">
            {picture.media_type === 'image' ? (
              <a href={picture.hdurl} target="_blank" rel="noreferrer">
                <img src={picture.hdurl} alt={title} className="" />
              </a>
            ) : (
              <a href={picture.url} target="_blank" rel="noreferrer">
                <embed
                  src={picture.url}
                  title={title}
                  className=""
                />
              </a>
            )}
            <div className="">
              <p>
                explanation:
                <br />
                {picture.explanation}
              </p>
              <div className="">
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
