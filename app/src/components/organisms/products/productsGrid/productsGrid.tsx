import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCardLoader from '@/app/src/components/molecules/Loader/productCardLoader';

import { ProductCard } from '../../../molecules/productCard';
import { ProductsGridProps } from './productsGrid.types';

const ProductsGrid: FC<ProductsGridProps> = ({
  products = [],
  fetchCallback = () => { },
  more = true,
}) => {

  return <InfiniteScroll
    dataLength={products.length}
    next={fetchCallback}
    hasMore={more}
    className="grid gap-[15px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[15px] w-full"
    loader={
      (
        <>
          {[...Array(4)].map((_, n) => (
            <ProductCardLoader key={`key-${n}`} />
          ))}
        </>
      )
    }
  >
    {products?.map((product: any, index: number) => (
      <ProductCard {...product} key={product.id} />
    ))}
  </InfiniteScroll>
};

export default ProductsGrid;
