import { FC } from 'react';
import Image from "next/image";
import { Price } from '@/app/src/components/atoms/price'
import Link from 'next/link'
import { ProductCardProps } from './productCard.types';
import { CartButtons } from '../../organisms/cartButtons';

const placeholder = 'svg/not-available.svg.svg';

const ProductCard: FC<ProductCardProps> = ({
  slug, id, title, images, sale
}) => {
  return <Link href={`products/${slug}`} key={id} className="group relative bg-white p-5 rounded-[5px] bg-white cursor-pointer h-full flex flex-col">
  <div className="relative w-full pb-[100%]">
    <Image alt="product.title" src={images?.featured_image || placeholder} fill style={{objectFit: "contain"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
  </div>
  <div className="mb-[15px]">
    <div className="text-[18px] leading-[26px] text-[#747272]">
      <h2>{title}</h2>
    </div>
  </div>
  <Price currency={sale.currency} regular_price={sale.regular_price} offer_price={sale.offer_price} />
  <div className='mt-auto'>
    <CartButtons id={id} />
  </div>
</Link>
};

export default ProductCard;
