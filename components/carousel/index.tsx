// components/Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css';
import Image from 'next/image';

const images = [
  { src: '/images/pamonha.jpg', alt: 'Pamonha' },
  { src: '/images/canjica.jpg', alt: 'Canjica' },
  { src: '/images/curau.jpg', alt: 'Curau' },
];

const CustomCarousel: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-8">
      <Carousel
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        className={styles.carousel}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} layout="responsive" width={500} height={300} className="rounded-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
