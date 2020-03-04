import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CustomCarousel = () => {
  return (
    <Carousel width="25%" infiniteLoop>
      <div>
        <img
          alt="rick"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          alt="morty"
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          alt="summer"
          src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
