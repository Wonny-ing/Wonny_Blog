import TagInfoPortal from '@/components/Tag/TagInfoPortal';
import TagPosts from '@/components/Tag/TagPosts';

export default function page() {
  return (
    <section className='w-full'>
      <TagInfoPortal />
      <div>
        {/* @ts-expect-error Async Server Component */}
        <TagPosts />
      </div>
    </section>
  );
}
