import { ProductCardProps } from '@/app/src/components/molecules/productCard/productCard.types';

export interface ProductsGridProps {
  /**
   * The content of the component
   */
  products: ProductCardProps[] | undefined;
  /**
   * Callback function for infinite scroll
   */
  fetchCallback?: any;
  /**
   * Set if there is more data available to fetch
   */
  more?: boolean;
}
