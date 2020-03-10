import React from 'react';
import CustomCarousel from '~Components/Carousel';
import CustomSearch from '~Components/SearchBar';

export const Home = () => {
  return (
    <>
      <CustomCarousel />
      <CustomSearch type="character" />
    </>
  );
};
