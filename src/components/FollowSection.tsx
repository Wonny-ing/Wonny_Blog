import React from 'react';
import SNS from './SNS';
import TitleRow from './TitleRow';

export default function FollowSection() {
  return (
    <section>
      <TitleRow title='Follow Me!' />
      <SNS type='footerSection' />
    </section>
  );
}
