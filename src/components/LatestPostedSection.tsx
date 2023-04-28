import { getLatestedPosts } from '@/service/post';
import React from 'react';
import PostsGrid from './PostsGrid';
import TitleRow from './TitleRow';

export default async function LatestPostedSection() {
  const posts = await getLatestedPosts();

  return (
    <section>
      <TitleRow title='Latest Articles' />
      <PostsGrid posts={posts} />
    </section>
  );
}
