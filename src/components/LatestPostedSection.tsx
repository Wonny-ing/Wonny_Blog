import { getLatestedPosts } from '@/service/post';
import React from 'react';
import PostsGrid from './PostsGrid';

export default async function LatestPostedSection() {
  const posts = await getLatestedPosts();

  return (
    <section className='my-4 w-1/4 ml-5'>
      <div className='flex items-center'>
        <h2 className='text-3xl font-semibold my-10 w-3/5 text-uPrimary'>
          Latest Articles
        </h2>
        <div className='bg-uRed w-2/5 h-[3px]'></div>
      </div>
      <PostsGrid posts={posts} />
    </section>
  );
}
