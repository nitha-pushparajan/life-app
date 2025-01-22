'use client'; 

import { FC, useEffect } from 'react';
import { ProductDetailsProps } from './productDetails.types';
import { Price } from '@/app/src/components/atoms/price';
import { Rating } from '@/app/src/components/atoms/rating';
import { PageTitle } from '@/app/src/components/atoms/pageTitle';
import { ProductSwiper } from '@/app/src/components/molecules/ProductSwiper';
import {HTMLContent} from '@/app/src/components/atoms/htmlContent';
import { CartButtons } from '../cartButtons';


const ProductDetails: FC<ProductDetailsProps> = ({ images, productDetails, priceDetails, rating }) => {

  useEffect(() => {
    // Ensure the page is scrolled to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 bg-white w-full'>
        <div className={`${images.length ? '':'bg-[#e5e7eb]'}`}>
          <ProductSwiper images={images} title={productDetails?.title} />
        </div>
        <div className='px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[40px] lg:py-[80px] box-border w-full'>
          <PageTitle title={productDetails?.title} />
          <div className="md:pt-[35px] lg:pt-[50px] pt-[25px]">
            <div className="flex justify-between items-center">
              <div className="flex-col items-start flex">
                <Price currency={priceDetails?.currency} regular_price={priceDetails.regular_price} offer_price={priceDetails.offer_price} />
              </div>
              <div className="flex">
                {priceDetails.offer_label && <span className="bg-[#21b59c] text-white text-[14px] p-[5px] rounded-[5px] font-bold"><span>{priceDetails.offer_label}</span></span>}
              </div>
            </div>
            <div className='py-[20px]'>
              <Rating value={rating?.rating} count={rating?.count} />
            </div>
            <CartButtons id={productDetails.id} />
            <HTMLContent content={productDetails?.short_description} className='text-[#373737] text-[14px] px-[5px]' />
          </div>
        </div>
      </div>
      <div className='my-[25px] bg-white px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[40px] lg:py-[80px] box-border w-full rounded-[5px]'>
        <HTMLContent content={productDetails?.description} />
      </div>
    </>
  );
};

export default ProductDetails;
