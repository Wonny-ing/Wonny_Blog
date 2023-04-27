import TagButton from './TagButton';

const TAGS = [
  { title: 'lifestyle', color: 'text-uYellow' },
  { title: 'music', color: 'text-uVelog' },
  { title: 'health', color: 'text-uFacebook' },
  { title: 'travel', color: 'text-uTwitter' },
  { title: 'Video', color: 'text-uInstargram' },
];

export default function TagSection() {
  return (
    <section className='my-4 w-1/4'>
      <div className='flex items-center'>
        <h2 className='text-3xl font-semibold my-10 w-2/5 text-uPrimary'>
          Tag Cloud
        </h2>
        <div className='bg-uRed w-3/5 h-[3px]'></div>
      </div>
      <ul className='flex flex-wrap gap-4 w-full h-full'>
        {TAGS.map((tag, index) => (
          <TagButton key={index} tag={tag} />
        ))}
      </ul>
    </section>
  );
}
