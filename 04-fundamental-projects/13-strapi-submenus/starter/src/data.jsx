import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';

const sublinks = [
  {
    pageId: nanoid(),
    page: 'producto',
    links: [
      {
        id: nanoid(),
        label: 'communidad',
        icon: <Fa500Px />,
        url: '/product/community',
      },
      {
        id: nanoid(),
        label: 'contenido',
        icon: <FaAccusoft />,
        url: '/product/content',
      },
      {
        id: nanoid(),
        label: 'roles',
        icon: <FaAdversal />,
        url: '/product/roles',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'distribuidores',
    links: [
      {
        id: nanoid(),
        label: 'bogota',
        icon: <FaAvianex />,
        url: '/solutions/developers',
      },
      {
        id: nanoid(),
        label: 'medellin',
        icon: <FaBitcoin />,
        url: '/solutions/content-managers',
      },
      {
        id: nanoid(),
        label: 'cali',
        icon: <FaBtc />,
        url: '/solutions/business teams',
      },
      {
        id: nanoid(),
        label: 'comercio electronico',
        icon: <FaCodiepie />,
        url: '/solutions/ecommerce',
      },
    ],
  },
  {
    page: 'recursos',
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: 'principiantes',
        icon: <FaDocker />,
        url: '/resources/starters',
      },
      {
        id: nanoid(),
        label: 'vitrina',
        icon: <FaGithubSquare />,
        url: '/resources/showcase',
      },
    ],
  },
];

export default sublinks;
