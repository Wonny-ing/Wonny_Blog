import { getAllPosts } from '@/service/post';
import MultiCarousel from './MultiCarousel';
import Image from 'next/image';

export default async function CarouselPostImage() {
  const posts = await getAllPosts();
  return (
    <div className='relative  shadow-sm h-[550px]'>
      <MultiCarousel>
        {posts.map((post) => (
          <div key={post.title} className='w-full h-[550px]'>
            <Image
              className='object-cover'
              src={post.image}
              alt={post.title}
              fill
            />
          </div>
        ))}
      </MultiCarousel>
      <div className='absolute border-2 border-uWhite w-[99%] h-[98%] top-1.5 left-1.5 shadow-sm'></div>
    </div>
  );
}
