import TagButton from './TagButton';
import TitleRow from './TitleRow';

const TAGS = [
  { title: 'lifestyle', color: 'text-uYellow' },
  { title: 'music', color: 'text-uVelog' },
  { title: 'health', color: 'text-uFacebook' },
  { title: 'travel', color: 'text-uTwitter' },
  { title: 'Video', color: 'text-uInstargram' },
];

export default function TagSection() {
  return (
    <section>
      <TitleRow title='Tag Cloud' />
      <ul className='flex flex-wrap gap-4 w-full'>
        {TAGS.map((tag, index) => (
          <TagButton key={index} tag={tag} />
        ))}
      </ul>
    </section>
  );
}
