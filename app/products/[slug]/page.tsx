'use client'

import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Price } from '@/app/src/components/atoms/price';
import { Rating } from '@/app/src/components/atoms/rating';
import { PageTitle } from '@/app/src/components/atoms/pageTitle';
import ProductPageLoader from '@/app/src/components/molecules/Loader/productPageLoader';
import { useParams } from 'next/navigation';
import { ProductSwiper } from '@/app/src/components/molecules/ProductSwiper';
import { ProductDetails } from '@/app/src/components/organisms/products/product-details';

const Products = () => {

  const { slug } = useParams();

  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(true)
  const productDetails = data?.product_details;
  const images = productDetails?.images?.gallery_images || [];
  const priceDetails = productDetails?.sale || {};
  const rating = data?.rating;
  useEffect(() => {
    fetch(`https://prodapp.lifepharmacy.com/api/v1/product/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      {isLoading ? 
      <ProductPageLoader /> : <ProductDetails images={images} productDetails={productDetails} priceDetails={priceDetails} rating={rating} />
      }
    </div>
  );
};

export default Products;
