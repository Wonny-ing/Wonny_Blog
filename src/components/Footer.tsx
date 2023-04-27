import Title from './Title';
import LatestPostedSection from './LatestPostedSection';
import TagSection from './TagSection';
import FollowSection from './FollowSection';
import UserInfoSection from './UserInfoSection';

export default function Footer() {
  return (
    <footer className='mx-auto w-full'>
      <div className='flex gap-10 items-start mb-20'>
        {/* @ts-expect-error Async Server Component */}
        <LatestPostedSection />
        <TagSection />
        <FollowSection />
        <UserInfoSection />
      </div>
      <div className='text-center'>
        <Title />
        <p className='p-10'>Published with WordPress & EstudioPatagon</p>
      </div>
    </footer>
  );
}
