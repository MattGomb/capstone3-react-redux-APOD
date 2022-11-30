import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <div className={style.filmCard}>
      {detailedPictures.map((picture) => (
        <div className={style.filmInnerCard} key={picture.title}>
          <h2 className={style.title}>{picture.title}</h2>
          <div className={style.cardDetails}>
            <img src={picture.hdImage} alt={title} className={style.banner} />
            <div className={style.detailParas}>
              <p className={style.description}>
                explanation:
                <br />
                {picture.explanation}
              </p>
              <div className={style.midCol}>
                <div className={style.smallCols}>
                  <p className={style.director}>
                    copyright:
                    <br />
                    {picture.copyright}
                  </p>
                  <p className={style.producer}>
                    date of APOD:
                    <br />
                    {picture.date}
                  </p>
                </div>
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
