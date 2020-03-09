import { RouteType } from '~Types/Route';
import Tiles from '~Components/Tiles';
import CustomCarousel from '~Components/Carousel';

/**
 * ELEMENTS IN ARRAY:
 * name: Name of link (used in navbar mostly). NOT Required
 * path: Path binding to component, it must to be same as the path specified in
 *       Link component. Required
 * component: Component rendered when bound path is accessed. NOT Required in
 *            first instance, once you have the developed component, must be
 *            bound.
 * navRoute: Indicates if route belongs to Navbar or not. Required
 */
export const routes: Array<RouteType> = [
  {
    name: 'Inicio',
    path: '/',
    component: CustomCarousel,
    navRoute: true,
  },
  {
    name: 'Personajes',
    path: '/personajes',
    component: Tiles,
    navRoute: true,
  },
  {
    name: 'Capítulos',
    path: '/capitulos',
    navRoute: true,
  },
  {
    name: 'Planetas',
    path: '/planetas',
    navRoute: true,
  },
];
