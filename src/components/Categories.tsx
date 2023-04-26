import React from 'react';

const CATEGORIES = [
  { title: 'Home', subCategory: '' },
  { title: 'Post Styles', subCategory: '' },
  { title: '#Tag', subCategory: '' },
  { title: 'Author', subCategory: '' },
  { title: 'Features', subCategory: '' },
  { title: 'Contact', subCategory: '' },
];

export default function Categories() {
  return (
    <ul className='m-auto flex items-center bg-white shadow-md p-4 w-[703px]'>
      {CATEGORIES.map((item, index) => (
        <li
          key={index}
          className='w-1/6 text-center cursor-pointer text-uPrimary'
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
