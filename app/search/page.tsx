'use client'

import { useEffect, useState } from 'react';
import { ProductsGrid } from "@/app/src/components/organisms/productsGrid";
import { PageTitle } from '@/app/src/components/atoms/pageTitle'
import { useSearchParams } from 'next/navigation';
import {ProductCardProps} from '@/app/src/components/molecules/productCard'
import Head from 'next/head';
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
    // Update endpoint to use the correct search API
    fetch(`https://prodapp.lifepharmacy.com/api/v1/products?take=20&skip=${skip}&query=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts((products: ProductCardProps[]) => (skip !==0 ? [...products, ...(data.data.products)] : data.data.products));
        if (data.data.products.length === paginationItems) {
          setMore(true);
        }
      })
  }, [skip, searchQuery])

  useEffect(() => {
    setSkip(0);
    setMore(true);
  }, [searchQuery]);

  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      <Head>
        <title>Search Page</title>
        <meta name="description" content="Search page" />
      </Head>
      <PageTitle title={`Search Results for ${searchQuery}`} />
      <ProductsGrid products={products} more={more} fetchCallback={fetchCallback} />
    </div>
  );
}
