import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import TitleRow from '@/components/TitleRow';
import { getAllPosts, getPostData } from '@/service/post';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, image, path, next, prev } = post;
  return (
    <>
      <article className='shadow-xl overflow-hidden mb-28'>
        <div className='relative w-full h-[400px]'>
          <Image className='object-cover' src={image} alt={title} fill />
        </div>
        <PostContent post={post} />
      </article>
      <section>
        <TitleRow title='Other Posts' />
        <div className='flex gap-10'>
          {prev && <AdjacentPostCard post={post} type='prev' />}
          {next && <AdjacentPostCard post={post} type='next' />}
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
