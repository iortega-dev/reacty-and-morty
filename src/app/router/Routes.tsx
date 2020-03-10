import { RouteType } from '~Types/Route';
// Views import
import { Characters } from '~Views/Characters';
import { Home } from '~Views/Home';
import { Episodes } from '~Views/Episodes';
import { Locations } from '~Views/Locations';

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
    component: Home,
    navRoute: true,
  },
  {
    name: 'Personajes',
    path: '/personajes',
    component: Characters,
    navRoute: true,
  },
  {
    name: 'Episodios',
    path: '/episodios',
    component: Episodes,
    navRoute: true,
  },
  {
    name: 'Localizaciones',
    path: '/localizaciones',
    component: Locations,
    navRoute: true,
  },
];
