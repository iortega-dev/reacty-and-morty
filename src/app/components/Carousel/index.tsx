import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = () => {
  const characterInfos = [
    {
      data: {
        name: 'Rick Sánchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
    },
    {
      data: {
        name: 'Morty Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
    },
    {
      data: {
        name: 'Summer Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
    },
  ];

  return (
    <Carousel showThumbs={false} width="25%" infiniteLoop>
      {characterInfos.length > 0 &&
        characterInfos.map(item => (
          <div>
            <img src={item.data.image} alt="slide" />
            <p className="legend">{item.data.name}</p>
          </div>
        ))}
    </Carousel>
  );
};

export default CustomCarousel;
