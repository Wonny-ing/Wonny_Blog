'use client';

import { NAV_LIST } from './HeaderNav';
import Inner from './Inner';
import Title from './Title';

type Props = {
  isShow: boolean;
};

export default function Nav({ isShow }: Props) {
  return (
    <>
      {isShow && (
        <nav
          className={`fixed top-0 left-0 right-0 z-10 w-full py-3 bg-uWhite shadow-md transition-all duration-300`}
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
      )}
    </>
  );
}
