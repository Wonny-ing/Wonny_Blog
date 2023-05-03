import { Post } from '@/service/post';
import TagButton from './TagButton';
import { RiChat3Line } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
import Image from 'next/image';
import Button from './Button';
import Underline from './Underline';
type Props = { post: Post };

export default function MainPostCard({
  post: { title, date, comments, likes, description, categories, image },
}: Props) {
  return (
    <article className='relative flex flex-col h-[500px] mb-10 p-12 bg-uWhite shadow-md'>
      <div className='h-fit flex items-center gap-8 mb-10'>
        <div className='w-32 h-32 overflow-hidden border-2 border-uFontColor'>
          <Image
            className='object-cover w-full h-full border-2 border-uWhite'
            src={image}
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div className='w-4/5 flex flex-col gap-3 '>
          <div className='text-uFontColor space-y-2'>
            <Underline text={title} />
          </div>
          <div className='flex items-center gap-5 text-uFontColor font-serif'>
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
      <div className='absolute -bottom-5 self-center'>
        <Button>Continue Reading</Button>
      </div>
    </article>
  );
}
