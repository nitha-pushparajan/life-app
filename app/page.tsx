'use client'

import { useEffect, useState } from 'react';
import { ProductsGrid } from "@/app/src/components/organisms/productsGrid";
import { PageTitle } from '@/app/src/components/atoms/pageTitle'
import {ProductCardProps} from '@/app/src/components/molecules/productCard'
import Head from 'next/head';
const paginationItems = 20;

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([])
  const [more, setMore] = useState(false);
  const [skip, setSkip] = useState(0);

  const fetchCallback = () => {
    setSkip(nb => nb + paginationItems);
  };

  useEffect(() => {
    // Update endpoint to use the correct search API
    fetch(`https://prodapp.lifepharmacy.com/api/v1/products?take=20&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((products: ProductCardProps[]) => (skip !==0 ? [...products, ...(data.data.products)] : data.data.products));
        // total products count is missing in the API, so adding temporary fix to set more state
        if (data.data.products.length === paginationItems) {
          setMore(true);
        }
      })
  }, [skip])

  useEffect(() => {
    setMore(true);
  }, []);

  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      <Head>
        <title>Shop Page</title>
        <meta name="description" content="Shopping list" />
      </Head>
      <PageTitle title='Shop' />
      <ProductsGrid products={products} more={more} fetchCallback={fetchCallback} />
    </div>
  );
}
