import * as React from 'react';
import Loader from 'react-loader-spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

const getRandomIDs = async limit => {
  let characterIDs: number[] = [];
  const result = await axios.get('https://rickandmortyapi.com/api/character/');
  while (characterIDs.length < limit) {
    let number = Math.floor(Math.random() * result.data.info.count) + 1;
    if (!characterIDs.includes(number)) {
      characterIDs.push(number);
    }
  }
  return characterIDs;
};

// const getCharacter = (characterID: number) => {
//   const characterInfo = axios.get(
//     `https://rickandmortyapi.com/api/character/${characterID}`
//   );
//   return characterInfo;
// };

const getCharacterInfos = async (characterIDs: number[]) => {
  let results = await Promise.all(
    characterIDs.map(async (item, index) => {
      const char = await axios.get(
        `https://rickandmortyapi.com/api/character/${item}`
      );
      return char;
    })
  );
  return results;
};

const generateCharactersData = async () => {
  const characterIDs = await getRandomIDs(10);
  const characterInfos = await getCharacterInfos(characterIDs);
  return characterInfos;
};

const CustomCarousel = () => {
  const [characterInfos, setcharacterInfos] = React.useState<any[]>(
    [] as any[]
  );
  const [isLoadedCarousel, setisLoadedCarousel] = React.useState<boolean>(
    false
  );

  React.useEffect(() => {
    const fetchCarousel = async () => {
      setcharacterInfos(await generateCharactersData());
      setisLoadedCarousel(true);
    };
    fetchCarousel();
  }, []);

  if (isLoadedCarousel === false) {
    return <Loader type="Oval" width={500} />;
  }
  return (
    <Carousel width="25%" infiniteLoop>
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
