import { Post } from '@/service/post';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import Underline from './Underline';
import Link from 'next/link';

type Props = { post: Post };

export default function PostCard({
  post: { title, date, image, path },
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className='group flex overflow-hidden gap-4 w-full h-full ease-in duration-300'
    >
      <div className='w-20 h-20 overflow-hidden border-2 border-uFontColor'>
        <Image
          className='object-cover w-full h-full border-2 border-uWhite'
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <div className='flex flex-col justify-center gap-2 w-4/5'>
        <div className='text-uFontColor space-y-2'>
          <Underline text={title} size='small' />
        </div>
        <time className='text-uPrimary font-serif'>{formatDate(date)}</time>
      </div>
    </Link>
  );
}
