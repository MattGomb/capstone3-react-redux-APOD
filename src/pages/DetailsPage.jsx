import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Details from '../components/PictureCardDetails';

const DetailsDisplay = () => {
  const pictures = useSelector((state) => state.pictures);

  return (
    <section className="d-flex flex-column align-items-center py-5" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <Link to="/" className="text-center text-light">
        <p><RiArrowGoBackLine /></p>
      </Link>
      <Details pictures={pictures} />
    </section>
  );
};

export default DetailsDisplay;
