import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '../../public/images/wonny2.jpeg';
import SNS from './SNS';

export default function Hero() {
  return (
    <section className='flex flex-col justify-center gap-4'>
      <div className='flex items-center gap-10'>
        <Image
          className='rounded-full'
          src={ProfileImage}
          alt='Picture of avatar'
          width={100}
          height={100}
          priority
        />
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl font-semibold'>Wonny</h3>
          <p className='pt-1 pb-2'>Front-end Developer</p>
          <SNS textSize='text-xl' />
        </div>
      </div>
    </section>
  );
}
