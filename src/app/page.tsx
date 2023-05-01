import Image from 'next/image';
import { Inter } from 'next/font/google';
import LatestPostedSection from '@/components/LatestPostedSection';
import AllPosts from '@/components/AllPosts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <AllPosts />
      {/* <div className='w-full bg-slate-700'>das</div> */}
    </section>
  );
}
