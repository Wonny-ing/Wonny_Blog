import React from 'react';
import NavMenu from './NavMenu';

export const NAV_LIST = [
  { title: 'Home', url: '/', subCategory: [] },
  { title: 'Posts', url: '/posts', subCategory: [] },
  {
    title: '# Tag',
    url: '/tag',
    subCategory: [
      { title: 'lifestyle', url: '/tag/ifestyle' },
      { title: 'music', url: '/tag/music' },
      { title: 'health', url: '/tag/health' },
      { title: 'travel', url: '/tag/travel' },
    ],
  },
  { title: 'About', url: '/about', subCategory: [] },
  { title: 'Portfolio', url: '/portfolio', subCategory: [] },
  { title: 'Contact', url: '/contact', subCategory: [] },
];

export default function HeaderNav() {
  return (
    <ul className='mx-auto flex items-center bg-uWhite shadow-md p-4 w-[703px]'>
      {NAV_LIST.map((nav, index) => (
        <NavMenu key={nav.title} nav={nav} />
      ))}
    </ul>
  );
}
