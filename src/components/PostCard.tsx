import { Post } from '@/service/post';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };

export default function PostCard({ post: { title, date } }: Props) {
  return (
    <article className='group flex overflow-hidden gap-4 w-full h-full ease-in duration-300'>
      {/* <Image
        className='w-full'
        src={`/images/posts/${image}.png`}
        alt={title}
        width={300}
        height={200}
      /> */}
      <div className='w-1/4 h-24 bg-slate-500 shadow-lg'></div>
      <div className='flex flex-col justify-center gap-2 w-3/4'>
        <h3 className='text-lg font-bold'>
          <a
            href=''
            className='group-hover:border-b-4 group-hover:border-uYellow	'
          >
            {title}
          </a>
        </h3>
        <time className=' text-gray-700'>{formatDate(date)}</time>
      </div>
    </article>
  );
}
