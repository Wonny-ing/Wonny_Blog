import React from 'react';
import Hero from './Hero';

export default function UserInfoSection() {
  return (
    <section className='my-4 w-1/4 mr-5'>
      <div className='flex items-center'>
        <h2 className='text-3xl font-semibold my-10 w-2/5 text-uPrimary'>
          About me
        </h2>
        <div className='bg-uRed w-3/5 h-[3px]'></div>
      </div>
      <Hero />
    </section>
  );
}
