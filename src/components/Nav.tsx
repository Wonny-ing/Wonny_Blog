'use client';

// import useHeaderVisibility from '@/hooks/useHeaderVisibility';
import { useCallback, useEffect, useState } from 'react';
import { NAV_LIST } from './HeaderNav';
import Inner from './Inner';
import Title from './Title';

export default function Nav() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log('yOffset', pageYOffset, 'scrollY', scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    console.log(scrollY);

    //add eventlistener to window
    window.addEventListener('scroll', onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 w-full py-3 bg-uWhite shadow-md transition-all duration-300 ${
        scrollY > 400 ? 'visible opacity-100	' : 'invisible opacity-0'
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
