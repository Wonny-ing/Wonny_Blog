import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '', color: 'uFacebook' },
  { icon: <AiFillLinkedin />, url: '', color: 'uInstargram' },
  { icon: <AiFillYoutube />, url: '', color: 'white' },
];

export default function SNS() {
  return (
    <ul className='flex gap-4 text-3xl'>
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target='_blank'
          rel='noreferrer'
          className={`text-${link.color}`}
        >
          {link.icon}
        </a>
      ))}
    </ul>
  );
}
