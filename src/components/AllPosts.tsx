'use client';
import { Post, getAllPosts } from '@/service/post';
import MainPostCard from './MainPostCard';
import Paginate from './Paginate';
import { useState } from 'react';

type Props = { posts: Post[] };

export default function AllPosts({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = posts.slice(
    offset,
    offset + Math.min(itemsPerPage, posts.length - offset)
  );
  const changePageHandler = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  return (
    <>
      <ul>
        {currentItems.map((post, index) => (
          <li key={index}>
            <MainPostCard post={post} />
          </li>
        ))}
      </ul>
      <Paginate
        currentPage={currentPage}
        totalElements={pageCount}
        changePageHandler={changePageHandler}
      />
    </>
  );
}
