import MainPostCard from '@/components/MainPostCard';
import { getAllPosts } from '@/service/post';

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>
          <MainPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
