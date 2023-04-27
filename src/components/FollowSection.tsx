import React from 'react';
import SNS from './SNS';

export default function FollowSection() {
  return (
    <section className='my-4 w-1/4'>
      <div className='flex items-center'>
        <h2 className='text-3xl font-semibold my-10 w-2/5 text-uPrimary'>
          Follow Me!
        </h2>
        <div className='bg-uRed w-3/5 h-[3px]'></div>
      </div>
      <SNS type='footerSection' />
    </section>
  );
}
