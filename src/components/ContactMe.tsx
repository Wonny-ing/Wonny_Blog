import SNS from './SNS';
import Title from './Title';

export default function ContactMe() {
  return (
    <section className='flex flex-col items-center gap-5 w-full py-10 my-24 bg-uWhite h-96'>
      <h2 className='flex gap-2 text-uPrimary text-4xl font-semibold'>
        Subscribe to
        <Title textSize='text-4xl' />
      </h2>
      <p className='text-uFontColor font-serif'>
        Get the latest posts delivered right to your email.
      </p>
      <SNS />
    </section>
  );
}
