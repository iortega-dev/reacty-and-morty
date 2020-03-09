import { RouteType } from '~Types/Route';
import Tiles from '~Components/Tiles';
import CustomCarousel from '~Components/Carousel';

export const routes: Array<RouteType> = [
  {
    name: 'Inicio',
    path: '/',
    component: CustomCarousel,
  },
  {
    name: 'Personajes',
    path: '/personajes',
    component: Tiles,
  },
  {
    name: 'Capítulos',
    path: '/capitulos',
  },
  {
    name: 'Planetas',
    path: '/planetas',
  },
];
