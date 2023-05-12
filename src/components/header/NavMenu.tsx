'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SubMenu from './SubMenu';
import PingCircle from '../ui/PingCircle';

export type subCategories = {
  title: string;
  url: string;
};

type NavList = {
  title: string;
  url: string;
  subCategory: subCategories[];
};

type Props = {
  nav: NavList;
};

const HOVER_CLASS = 'transition-all group-hover:text-uRed';

export default function NavMenu({ nav: { title, url, subCategory } }: Props) {
  const pathname = usePathname();
  const hasSubCategory = subCategory && subCategory.length > 0;
  const isActive = url === '/' ? pathname === url : pathname.includes(url);

  return (
    <li className='group relative w-1/6 flex items-center cursor-pointer text-uPrimary'>
      {hasSubCategory ? (
        <div className='w-full flex items-center justify-center'>
          <span className={`${HOVER_CLASS}`}>{title}</span>
          <MdKeyboardArrowDown />
          {/* <SubMenu subCategory={subCategory} /> */}
        </div>
      ) : (
        <Link href={url} className={`w-full text-center ${HOVER_CLASS}`}>
          {title}
        </Link>
      )}
      {isActive && <PingCircle />}
    </li>
  );
}
