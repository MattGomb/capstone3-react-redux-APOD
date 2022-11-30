import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmsList from '../components/FilmsList';
import { fetchFilms } from '../redux/films/FilmsSlice';
import SearchBar from '../components/Search';
import style from '../styles/FilmsPage.module.css';

const FilmsDisplay = () => {
  const films = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <section className={style.allFilms}>
      <div className={style.allFilmsHeader}>
        <h1 className={style.sectionTitle}>Films</h1>
        <SearchBar films={films} />
      </div>
      <FilmsList films={films} />
    </section>
  );
};

export default FilmsDisplay;
