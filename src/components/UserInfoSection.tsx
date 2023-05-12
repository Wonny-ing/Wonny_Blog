import React from 'react';
import Hero from './Hero';
import TitleRow from './TitleRow';

export default function UserInfoSection() {
  return (
    <section>
      <TitleRow title='About me' />
      <div className='flex flex-col items-center gap-5'>
        <Hero />
        <p>
          Frontend를 깊이 있게 다져나가고자 하는 프론트엔드 개발자입니다. 코드
          한 줄에도 서비스의 가치를 담으려고 노력하고, 끊임없이 새로운 도전을
          시도하며 실행에 옮기는 것을 좋아합니다.
        </p>
      </div>
    </section>
  );
}
