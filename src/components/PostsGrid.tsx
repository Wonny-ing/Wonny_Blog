import { Post } from '@/service/post';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className='flex flex-col flex-wrap gap-4 w-full h-full'>
      {posts.map((post) => (
        <li key={post.title} className='cursor-pointer'>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
