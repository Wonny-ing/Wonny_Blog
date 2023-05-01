import HeaderNav from './HeaderNav';
import Title from './Title';
import SNS from './SNS';
import { BiSearch } from 'react-icons/bi';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='flex flex-col mb-14'>
      {/* <Nav /> */}
      <div className='flex justify-between items-center py-20 w-full'>
        <SNS />
        <h1 className='flex gap-2'>
          <Title />
          <span className='text-6xl font-bold'>&apos;s Blog</span>
        </h1>
        <div className='ml-14'>
          <button className='flex justify-center items-center text-uWhite text-xl bg-uRed w-11 h-11 rounded-full shadow-sm'>
            <BiSearch />
          </button>
        </div>
      </div>
      <HeaderNav />
    </header>
  );
}
