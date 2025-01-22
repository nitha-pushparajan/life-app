'use client'; 

import { FC } from 'react';
import Image from "next/image";
import { ProductSwiperProps } from './productSwiper.types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const placeholder = 'svg/not-available.svg.svg';

const ProductSwiper: FC<ProductSwiperProps> = ({
  images,
  title = ""
}) => {
  return <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
>
  {
    images.map((image: any) => (
      <SwiperSlide key={image.image}>
        <div className="relative w-full pb-[100%]">
          <Image alt={title} src={image.image || placeholder} fill style={{objectFit: "contain"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </SwiperSlide>
    ))
  }
</Swiper>
  
};

export default ProductSwiper;
