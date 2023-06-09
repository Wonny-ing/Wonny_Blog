import TagButton from './TagButton';
import TitleRow from './TitleRow';

const TAGS = ['javaScript', 'css', 'react', 'redux', 'lodash'];

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
