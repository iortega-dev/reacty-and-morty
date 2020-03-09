// Global imports
import React from 'react';
// Local Imports
import { Navbar } from '~Components/Navbar';
import { Typography } from '~Assets/fonts';
import CustomCarousel from '~Components/Carousel';
import CustomSearch from '~Components/SearchBar';

const App = () => {
  return (
    <>
      <Typography />
      <Navbar />
      <CustomCarousel />
      <CustomSearch type="character" />
    </>
  );
};

export default App;
