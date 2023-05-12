import Link from 'next/link';
import { subCategories } from './NavMenu';

type Props = {
  subCategory: subCategories[];
};

export default function SubMenu({ subCategory }: Props) {
  return (
    <ul className='absolute z-10 top-10 left-0 flex flex-col gap-5 bg-uWhite shadow-md p-5 border border-gray-50 '>
      {subCategory.map((item) => (
        <li key={item.title} className='flex items-center gap-2 w-32'>
          <span>#</span>
          <Link href={item.url} className='hover:text-uRed'>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
