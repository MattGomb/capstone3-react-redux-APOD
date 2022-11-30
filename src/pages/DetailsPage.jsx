import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Details from '../components/PictureCardDetails';
import style from '../styles/Details.module.css';

const DetailsDisplay = () => {
  const pictures = useSelector((state) => state.pictures);

  return (
    <section className={style.detailsContainer}>
      <Link to="/">
        <p className={style.backSign}><RiArrowGoBackLine /></p>
      </Link>
      <div>
        <Details pictures={pictures} />
      </div>
    </section>
  );
};

export default DetailsDisplay;
