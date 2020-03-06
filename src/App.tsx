// Global imports
import React from 'react';
// Local Imports
import { Navbar } from '~Components/Navbar';
import { Typography } from '~Assets/fonts';
import CustomCarousel from '~Components/Carousel';

const App = () => {
  return (
    <>
      <Typography />
      <Navbar />
      <CustomCarousel />
    </>
  );
};

export default App;
