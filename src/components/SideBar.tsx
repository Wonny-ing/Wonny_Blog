import FollowSection from './FollowSection';
import LatestPostedSection from './LatestPostedSection';
import TagSection from './TagSection';
import UserInfoSection from './UserInfoSection';

export default function SideBar() {
  return (
    <section className='hidden md:flex flex-col gap-20 w-1/3 '>
      {/* @ts-expect-error Async Server Component */}
      <LatestPostedSection />
      <TagSection />
      <FollowSection />
    </section>
  );
}
