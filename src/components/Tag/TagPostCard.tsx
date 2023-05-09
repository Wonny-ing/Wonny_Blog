import { Post } from '@/service/post';
import TagButton from '../TagButton';
import Image from 'next/image';
import Underline from '../Underline';
import { RiChat3Line } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
type Props = { post: Post };

export default function TagPostCard({
  post: { title, date, comments, likes, description, categories, image, path },
}: Props) {
  return (
    <article className='relative flex flex-col h-[600px] mb-10 p-12 bg-uWhite shadow-md'>
      <div className='h-fit flex items-center gap-8 mb-10'>
        <div className='w-32 h-32 overflow-hidden border-2 border-uFontColor flex-shrink-0'>
          <Image
            className='object-cover w-full h-full border-2 border-uWhite'
            src={image}
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div className='w-4/5 flex flex-col gap-3'>
          <div className='text-uFontColor space-y-2'>
            <Underline text={title} />
          </div>
        </div>
      </div>
      <div className='flex items-center gap-5 text-uFontColor font-serif mb-10'>
        <span>{date}</span>
        <div className='h-[2px] w-6 bg-uRed'></div>
        <div className='flex items-center gap-2'>
          <RiChat3Line className='text-uRed' />
          <span>{comments}</span>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlineLike className='text-uRed' />
          <span>{likes}</span>
        </div>
      </div>
      <div className='flex-1 font-serif text-uFontColor text-lg leading-loose'>
        {description}
      </div>
      <div className='h-fit flex-shrink-0'>
        <ul className='flex gap-3'>
          {categories.map((tag, index) => (
            <TagButton key={index} tag={tag} />
          ))}
        </ul>
      </div>
    </article>
  );
}
