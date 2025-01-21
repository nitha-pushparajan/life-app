'use client'

import { useEffect, useState } from 'react';
import { ProductsGrid } from "./src/components/organisms/products/productsGrid";
import { PageTitle } from './src/components/atoms/pageTitle'
import { useSearchParams } from 'next/navigation';
import {ProductCardProps} from '@/app/src/components/molecules/productCard'
const paginationItems = 20;

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([])
  const [more, setMore] = useState(false);
  const [skip, setSkip] = useState(0);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query');


  const fetchCallback = () => {
    setSkip(nb => nb + paginationItems);
  };

  useEffect(() => {
    fetch(`https://prodapp.lifepharmacy.com/api/v1/products?take=20&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((products: ProductCardProps[]) => (skip !==0 ? [...products, ...(data.data.products)] : data.data.products));
        if (data.data.products.length === paginationItems) {
          setMore(true);
        }
      })
  }, [skip])

  useEffect(() => {
    setSkip(0);
    setMore(true);
  }, [searchQuery]);

  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      <PageTitle title='Shop' />
      <ProductsGrid products={products} more={more} fetchCallback={fetchCallback} />
    </div>
  );
}
