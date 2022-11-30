import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApod } from '../redux/pictures/PicturesSlice';
import SearchBar from '../components/Search';
import style from '../styles/FilmsPage.module.css';
import PicturesList from '../components/PictureCardList';

const PicturesDisplay = () => {
  const pictures = useSelector((state) => state.pictures);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApod());
  }, [dispatch]);

  return (
    <section className={style.allFilms}>
      <div className={style.allFilmsHeader}>
        <h1 className={style.sectionTitle}>Pictures</h1>
        <SearchBar />
      </div>
      <PicturesList pictures={pictures} />
    </section>
  );
};

export default PicturesDisplay;
