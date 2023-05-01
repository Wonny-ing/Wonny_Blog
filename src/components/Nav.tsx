'use client';

import { useEffect, useState } from 'react';
import { NAV_LIST } from './HeaderNav';
import Inner from './Inner';
import Title from './Title';

export default function Nav() {
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 w-full py-3 bg-uWhite shadow-md transition-all duration-300 ${
        scrollY >= 300 ? 'visibility opacity-100' : 'invisible opacity-0'
      }`}
    >
      <Inner>
        <div className='flex items-center justify-between'>
          <Title textSize='text-5xl' />
          <div className='w-3/5 flex justify-end'>
            <ul className='flex gap-10'>
              {NAV_LIST.map((item, index) => (
                <li
                  key={index}
                  className='font-semibold cursor-pointer text-uPrimary'
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Inner>
    </nav>
  );
}
