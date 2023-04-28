import React from 'react';
import Hero from './Hero';
import TitleRow from './TitleRow';

export default function UserInfoSection() {
  return (
    <section>
      <TitleRow title='About me' />
      <Hero />
    </section>
  );
}
