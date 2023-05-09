import { Post } from '@/service/post';
import TagPostCard from './TagPostCard';

type Props = { posts: Post[] };

export default function TagPostsGrid({ posts }: Props) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <TagPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
