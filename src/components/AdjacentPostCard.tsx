import { Post } from '@/service/post';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostCard({
  post: { path, title, image, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className='relative bg-uWhite shadow-xl w-full flex items-center p-6 gap-4 h-32'
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
      <div className='flex flex-col'>
        <span>{title}</span>
        <span>{type === 'prev' ? 'Previous Post' : 'Next Post'}</span>
      </div>
    </Link>
  );
}
