'use client';

import { Post } from '@/service/post';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SlideCard from './Slide/SlideCard';

type Props = {
  posts: Post[];
};

const variants = {
  invisible: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.2, duration: 0.4 },
  },
};

export default function MainSlide({ posts }: Props) {
  const [visible, setVisible] = useState(1);
  const length = posts.length;

  const handleNext = () =>
    setVisible((prev) => (prev === length ? length : prev + 1));
  const handlePrev = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));

  return (
    <div className='flex relative'>
      <AnimatePresence mode='popLayout'>
        {posts.map((post, index) =>
          visible === index + 1 ? (
            <motion.div
              key={post.title}
              className='w-full h-[550px] relative'
              variants={variants}
              initial='invisible'
              animate='visible'
              exit='exit'
            >
              <SlideCard post={post} />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div onClick={handlePrev} className='absolute flex top-1/2 left-5 z-10'>
        <Button
          bgColor='bg-uRed'
          width='w-10'
          height='h-10'
          padding='p-0'
          borderRadius='rounded-full'
          hover='hover:bg-uPrimary transition-all'
        >
          <BsArrowLeft className='text-lg' />
        </Button>
      </div>
      <div onClick={handleNext} className='absolute flex top-1/2 right-5 z-10'>
        <Button
          bgColor='bg-uRed'
          width='w-10'
          height='h-10'
          padding='p-0'
          borderRadius='rounded-full'
          hover='hover:bg-uPrimary transition-all'
        >
          <BsArrowRight className='text-lg' />
        </Button>
      </div>
    </div>
  );
}
