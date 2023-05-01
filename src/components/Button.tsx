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
  children,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`${width} ${height} ${bgColor} ${color} ${padding}`}
    >
      {children}
    </button>
  );
}
