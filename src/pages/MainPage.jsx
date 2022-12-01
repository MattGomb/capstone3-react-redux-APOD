import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApod } from '../redux/pictures/PicturesSlice';
import style from '../styles/FilmsPage.module.css';
import PicturesList from '../components/PictureCardList';

const PicturesDisplay = () => {
  const pictures = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  const onClickRefresh = (() => {
    dispatch(fetchApod());
  });

  return (
    <section className={style.allFilms}>
      <div className={style.allFilmsHeader}>
        <h1 className={style.sectionTitle}>Pictures</h1>
        <button type="button" className={style.searchBtn} onClick={onClickRefresh}>Load/Refresh</button>
      </div>
      {pictures.length === 0 ? (
        <div className={style.loading}>
          <h2 className={style.loadingMessage}>
            Click &apos;load/refresh&apos; to see some beautiful pictures!
          </h2>
        </div>
      ) : <PicturesList pictures={pictures} />}
    </section>
  );
};

export default PicturesDisplay;
