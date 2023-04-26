import React from 'react';
import Categories from './Categories';
import Title from './Title';
import SNS from './SNS';
import { BiSearch } from 'react-icons/bi';

export default function Header() {
  return (
    <header className='flex flex-col h-40'>
      <div className='flex justify-between items-center py-20'>
        <SNS />
        <Title />
        <button className='flex justify-center items-center text-uWhite text-xl bg-uRed w-11 h-11 rounded-full shadow-sm'>
          <BiSearch />
        </button>
      </div>
      <Categories />
    </header>
  );
}
