import AllPosts from '@/components/AllPosts';
import { getAllPosts } from '@/service/post';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <section>
      <AllPosts posts={posts} />
    </section>
  );
}
