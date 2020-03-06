import * as React from 'react';
import Loader from 'react-loader-spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { generateCharactersData } from '~Utils/index';

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

  if (!isLoadedCarousel) {
    return <Loader type="Oval" width={500} />;
  }
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
