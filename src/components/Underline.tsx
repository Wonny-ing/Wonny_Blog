'use client';
import React from 'react';
import { motion } from 'framer-motion';

type TSize = 'small' | 'normal';
type Props = { text: string; size?: TSize };

const varients = {
  initial: {
    borderBottomWidth: '0px',
  },
  whileHover: (size: string) => ({
    borderBottomWidth: size === 'normal' ? '5px' : '3px',
  }),
};

export default function Underline({ text, size = 'normal' }: Props) {
  return (
    <motion.h3
      custom={size}
      transition={{ duration: 0.2 }}
      variants={varients}
      initial='initial'
      whileHover='whileHover'
      className={classNameBy(size)}
    >
      {text}
    </motion.h3>
  );
}

function classNameBy(size: TSize): string {
  const base =
    'inline text-uPrimary border-uSkyBlue leading-normal cursor-pointer';
  const bold = size === 'normal' ? 'font-bold' : 'font-semibold';
  const textSize = size === 'normal' ? 'text-4xl' : 'text-md';

  return [base, bold, textSize].join(' ');
}
