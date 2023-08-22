import React from 'react';
import { useSelector } from 'react-redux';
import PicturesList from '../components/PictureCardList';

const MainDisplay = () => {
  const pictures = useSelector((state) => state.pictures);

  return (
    <section className="m-0 pt-5" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <PicturesList pictures={pictures} />
    </section>
  );
};

export default MainDisplay;
