import React from 'react';

type Props = {
  buttonType?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  bgColor?: string;
  color?: string;
  isDisabled?: boolean;
  hover?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  type = 'button',
  width = 'w-fit',
  height = 'h-fit',
  borderRadius = '',
  margin = '',
  padding = 'py-2 px-6',
  bgColor = 'bg-uPrimary',
  color = 'text-uWhite',
  isDisabled = false,
  hover = '',
  children,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center ${width} ${height} ${bgColor} ${color} ${padding} ${borderRadius} ${hover}`}
    >
      {children}
    </button>
  );
}
