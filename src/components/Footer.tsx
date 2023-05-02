import Title from './Title';
import LatestPostedSection from './LatestPostedSection';
import TagSection from './TagSection';
import FollowSection from './FollowSection';
import UserInfoSection from './UserInfoSection';

export default function Footer() {
  return (
    <footer className='mx-auto w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 mx-5'>
        {/* @ts-expect-error Async Server Component */}
        <LatestPostedSection />
        <TagSection />
        <FollowSection />
        <UserInfoSection />
      </div>
      <div className='text-center'>
        <h2 className='flex justify-center gap-2'>
          <Title />
          <span className='text-6xl font-bold'>&apos;s log</span>
        </h2>
        <p className='p-10'>Designed & Developed By Wonny</p>
      </div>
    </footer>
  );
}
