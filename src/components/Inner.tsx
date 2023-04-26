import React, { Children } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Inner({ children }: Props) {
  return <div className='mx-auto w-4/5'>{children}</div>;
}
