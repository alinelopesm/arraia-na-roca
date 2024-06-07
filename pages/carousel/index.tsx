import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css';
import Image from 'next/legacy/image';
import images from '@/compositions/carousel';

const CustomCarousel: React.FC = () => {
  return (
    <div id='custom-carousel' className="w-full mx-auto my-8">
      <Carousel
        showArrows
        showStatus
        infiniteLoop
        autoPlay
        showThumbs={false}
        swipeable
        interval={3000}
        className={styles.carousel}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} layout="responsive" width={500} height={300} className="rounded-xlg" />
          </div>
        ))}
      </Carousel>
  </div>
  );
};

export default CustomCarousel;
