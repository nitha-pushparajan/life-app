'use client'; 

import { FC, useState } from 'react';
import Image from "next/image";
import { ProductSwiperProps } from './productSwiper.types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const placeholder = 'svg/not-available.svg.svg';

const ProductSwiper: FC<ProductSwiperProps> = ({
  images,
  title = ""
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // State for managing the thumbnail swiper
  
  return (
    <div className="product-swiper px-[20px] md:pr-0 md:pl-[40px] lg:pl-[60px] py-[20px] md:py-[40px] lg:py-[80px]">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Thumbs]} 
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }} // Sync with thumbnail swiper
      >
        {images.map((image: any) => (
          <SwiperSlide key={image.image}>
            <div className="relative w-full pb-[100%]">
              <Image
                alt={title}
                src={image.image || placeholder}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper} // Set the thumbnail swiper
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="mt-4"
      >
        {images.map((image: any) => (
          <SwiperSlide key={image.image}>
            <div className="relative w-full pb-[100%]">
              <Image
                alt={title}
                src={image.image || placeholder}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;