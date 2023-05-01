import { getAllPosts } from '@/service/post';
import MainPostCard from './MainPostCard';

export default async function AllPosts() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <MainPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
