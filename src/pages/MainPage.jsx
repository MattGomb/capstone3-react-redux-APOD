import React from 'react';
import { useSelector } from 'react-redux';
import PicturesList from '../components/PictureCardList';

const MainDisplay = () => {
  const pictures = useSelector((state) => state.pictures);

  return (
    <section className="m-0 p-0" style={{ height: '96vh' }}>
      <div>
        <h1>Pictures</h1>
      </div>
      <PicturesList pictures={pictures} />
    </section>
  );
};

export default MainDisplay;
