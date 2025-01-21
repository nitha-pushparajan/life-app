import React from 'react';
import { Skeleton } from '@/app/src/components/atoms/skeleton';

const ProductPageLoader: React.FC = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 bg-white w-full'>
    <Skeleton variant="rect-big" fullWidth />
    <div className='px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[40px] lg:py-[80px] box-border w-full grid grid-cols-1 gap-3'>
      <Skeleton variant="text" className="!w-1/2" />
      <Skeleton variant="text" className="!w-1/4" />
      <Skeleton variant="text" className="!w-[20%]" />
    </div>
  </div>
);

export default ProductPageLoader;
