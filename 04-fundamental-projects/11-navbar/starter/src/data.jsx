import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'acerca de',
  },
  {
    id: 3,
    url: '/projects',
    text: 'proyectos',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contacto',
  },
  {
    id: 5,
    url: '/profile',
    text: 'perfil',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://es-la.facebook.com/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/feed/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net/',
    icon: <FaBehance />,
  },
];
