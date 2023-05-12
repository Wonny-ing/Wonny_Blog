import { PostData } from '@/service/post';
import { RiChat3Line } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
import formatDate from '@/utils/formatDate';
import MarkdownView from './MarkdownView';

type Props = {
  post: PostData;
};

export default function PostContent({ post }: Props) {
  const { title, description, date, comments, likes, content } = post;
  return (
    <section className='w-full'>
      <div className='flex flex-col bg-uWhite'>
        <h3 className='text-uPrimary text-4xl font-bold text-center my-12'>
          {title}
        </h3>
        <div className='flex items-center gap-5 text-uFontColor font-serif justify-center mb-16'>
          <span>{formatDate(date)}</span>
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
        <MarkdownView content={content} />
      </div>
    </section>
  );
}
