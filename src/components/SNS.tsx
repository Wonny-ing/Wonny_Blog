import React from 'react';
import { SiGithub, SiVelog, SiGmail } from 'react-icons/si';

const LINKS = [
  {
    icon: <SiGithub />,
    url: '',
    color: 'text-uPrimary',
    bgColor: 'bg-uPrimary',
    borderColor: 'border-uPrimary',
  },
  {
    icon: <SiVelog />,
    url: '',
    color: 'text-uVelog',
    bgColor: 'bg-uVelog',
    borderColor: 'border-uVelog',
  },
  {
    icon: <SiGmail />,
    url: '',
    color: 'text-uYellow',
    bgColor: 'bg-uYellow',
    borderColor: 'border-uYellow',
  },
];

type Props = {
  textSize?: string;
  type?: string;
};

export default function SNS({ textSize = 'text-3xl', type = '' }: Props) {
  return (
    <ul className={`flex gap-4 ${textSize}`}>
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target='_blank'
          rel='noreferrer'
          className={`${
            type === 'footerSection'
              ? 'text-white border-2 ' + link.borderColor
              : link.color
          }`}
        >
          <span
            className={`block ${
              type === 'footerSection'
                ? 'text-white border-2 border-uWhite p-4 ' + link.bgColor
                : link.color
            }`}
          >
            {link.icon}
          </span>
        </a>
      ))}
    </ul>
  );
}
