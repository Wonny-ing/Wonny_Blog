'use client';

import Carousel from 'react-multi-carousel';
// import { ArrowProps } from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    fade: true,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      responsive={responsive}
      transitionDuration={500}
    >
      {children}
    </Carousel>
  );
}

// const CustomRightArrow = ({ onClick, carouselState }: ArrowProps) => {
//   return <button onClick={() => onClick()} />;
// };
