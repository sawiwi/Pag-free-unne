import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties/Properties';
import Property from '../pages/Properties/Property';
// import PropertiesInMap from '../pages/PropertiesInMap';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Unne',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: 'Sobre mi',
    path: '/sobre-mi',
    element: <About />,
  },
  {
    id: 3,
    name: 'Propiedades',
    path: '/propiedades',
    element: <Properties />,
  },
  {
    id: 4,
    name: 'Propiedad detalle',
    path: '/propiedades/:id',
    element: <Property />,
  },
  // {
  //   id: 5,
  //   name: 'Propiedades en mapa',
  //   path: '/propiedades/propiedades-en-mapa',
  //   element: <PropertiesInMap />,
  // },
];
