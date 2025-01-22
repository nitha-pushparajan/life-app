import { PriceProps } from '@/app/src/components/atoms/price'
export type productDetails = {
  short_description: HTMLElement,
  description: HTMLElement,
  title: string;
  id: string;
};

export interface ProductDetailsProps {
  images: {
    image: string
  }[];
  rating: {
    rating: number,
    count: number,
  },
  priceDetails: PriceProps;
  productDetails: productDetails;
  // addProduct: () => void,
  // removeProduct: () => void,
  // count: number;
}
