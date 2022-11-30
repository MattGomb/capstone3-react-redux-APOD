import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import style from '../styles/Details.module.css';

const Details = (props) => {
  const { picture } = props;
  const {
    title,
  } = picture;

  const params = useParams();
  const pictures = useSelector((state) => state.pictures);
  const detailedPictures = pictures.filter((picture) => picture.title === params.title);

  return (
    <div className={style.pictureCard}>
      {detailedPictures.map((picture) => (
        <div className={style.picInnerCard} key={picture.title}>
          <h2 className={style.title}>{picture.title}</h2>
          <div className={style.cardDetails}>
            {picture.type === 'image' ? (
              <Link to={picture.hdImage} target="_blank" rel="noreferrer">
                <img src={picture.hdImage} alt={title} className={style.banner} />
              </Link>
            ) : (
              <Link to={picture.image} target="_blank" rel="noreferrer">
                <embed
                  src={picture.image}
                  title={title}
                  className={style.banner}
                />
              </Link>
            )}
            <div className={style.detailParas}>
              <p>
                explanation:
                <br />
                {picture.explanation}
              </p>
              <div className={style.smallCols}>
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
