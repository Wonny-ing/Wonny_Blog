import { getCategoryPosts } from '@/service/post';
import PostsGrid from '../PostsGrid';

export default async function TagPosts() {
  const posts = await getCategoryPosts('lifestyle');
  return <PostsGrid posts={posts} />;
}
