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
      <p>
        Frontend를 깊이 있게 다져나가고자 하는 프론트엔드 개발자입니다. 코드 한
        줄에도 서비스의 가치를 담으려고 노력하고, 끊임없이 새로운 도전을
        시도하며 실행에 옮기는 것을 좋아합니다.
      </p>
    </section>
  );
}
