'use client';

import HeaderNav from './HeaderNav';
import Title from '../Title';
import SNS from '../SNS';
import { BiSearch } from 'react-icons/bi';
import Nav from './Nav';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <header className='flex flex-col mb-14 relative'>
      <Nav isShow={!isInView} />
      <div className='flex justify-between items-center py-20 w-full'>
        <SNS />
        <Link
          href={`/`}
          className='absolute flex gap-2 left-1/2 transform -translate-x-1/2'
        >
          <Title />
          <span className='text-6xl font-bold'>&apos;s log</span>
        </Link>
        <div>
          <button className='flex justify-center items-center text-uWhite text-xl bg-uRed w-11 h-11 rounded-full shadow-sm'>
            <BiSearch />
          </button>
        </div>
      </div>
      <div ref={ref}>
        <HeaderNav />
      </div>
    </header>
  );
}
