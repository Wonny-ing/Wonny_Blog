import { Post } from '@/service/post';
import Image from 'next/image';

type Props = {
  post: Post;
};

export default function SlideCard({ post }: Props) {
  return (
    <>
      <Image
        className='object-cover'
        src={post.image}
        alt={post.title}
        fill
        priority
        quality={50}
      />
      <div className='absolute text-3xl top-1/2 left-1/4'>
        <p>{post.title}</p>
      </div>
      <div className='absolute border-2 w-[99%] h-[97.55%] top-1.5 left-1.5'></div>
    </>
  );
}
