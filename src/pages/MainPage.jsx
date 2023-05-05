import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayApod } from '../redux/pictures/PicturesSlice';
import style from '../styles/FilmsPage.module.css';
import PicturesList from '../components/PictureCardList';

const MainDisplay = () => {
  const pictures = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayApod());
  }, [dispatch]);

  return (
    <section className={style.allFilms}>
      <div className={style.allFilmsHeader}>
        <h1 className={style.sectionTitle}>Pictures</h1>
      </div>
      <PicturesList pictures={pictures} />
    </section>
  );
};

export default MainDisplay;
