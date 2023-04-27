import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Post = {
  title: string;
  date: string;
  comments: string;
  likes: string;
  description: string;
  categories: string[];
  image: string;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getLatestedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.slice(0, 3));
}

export const getAllPosts = cache(async () => {
  console.log('getAllPosts');

  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});
