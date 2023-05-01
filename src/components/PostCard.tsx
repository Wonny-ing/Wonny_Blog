import { Post } from '@/service/post';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';

type Props = { post: Post };

export default function PostCard({ post: { title, date, image } }: Props) {
  return (
    <article className='group flex overflow-hidden gap-4 w-full h-full ease-in duration-300'>
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
        <h3 className='text-lg font-bold'>
          <a
            href=''
            className='group-hover:border-b-4 text-uPrimary group-hover:border-uYellow'
          >
            {title}
          </a>
        </h3>
        <time className='text-uPrimary font-serif'>{formatDate(date)}</time>
      </div>
    </article>
  );
}
