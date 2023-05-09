import { getCategoryPosts } from '@/service/post';
import TagPostsGrid from './TagPostsGrid';

export default async function TagPosts() {
  const posts = await getCategoryPosts('lifestyle');
  return <TagPostsGrid posts={posts} />;
}
