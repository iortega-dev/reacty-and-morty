import * as React from 'react';
import { API } from '~Api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const getRandomIDs = () => {
  let characterIDs: number[] = [];
  const limit = 5;
  const count = 400;
  while (characterIDs.length < limit) {
    const number: number = Math.floor(Math.random() * count) + 1;
    if (!characterIDs.includes(number)) {
      characterIDs.push(number);
    }
  }
  return characterIDs;
};

const CustomCarousel = () => {
  const [characterInfos, setCharacterInfos] = React.useState<any>([]);
  const characterProvider = new API('character');
  const characterIDs = getRandomIDs();
  React.useEffect(() => {
    const getCharacterInfos = async () => {
      const res = await characterProvider.getMultiple(characterIDs);
      setCharacterInfos(res);
    };
    getCharacterInfos();
  }, []);

  return (
    <StyledCarousel autoPlay showThumbs={false} infiniteLoop>
      {characterInfos.length > 0 &&
        characterInfos.map(item => (
          <div key={item.id}>
            <img src={item.image} alt="slide" />
            <p className="legend">{item.name}</p>
          </div>
        ))}
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
  width: 25%;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
`;

export default CustomCarousel;
