import CarouselPostImage from './CarouselPostImage';

export default function KV() {
  return (
    <section className='mb-14'>
      {/* @ts-expect-error Async Server Component */}
      <CarouselPostImage />
    </section>
  );
}
