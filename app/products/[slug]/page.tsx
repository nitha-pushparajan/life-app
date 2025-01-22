'use client'
import { useEffect, useState } from 'react';
import ProductPageLoader from '@/app/src/components/molecules/Loader/productPageLoader';
import { useParams } from 'next/navigation';
import { ProductDetails } from '@/app/src/components/organisms/products/productDetails';
import Head from 'next/head';

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
        setLoading(false);
        window.scrollTo(0, 0);
      })
  }, [])

  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      <Head>
        <title>{productDetails?.title}</title>
        <meta name="description" content={productDetails?.title} />
      </Head>
      {isLoading ? 
      <ProductPageLoader /> : <ProductDetails images={images} productDetails={productDetails} priceDetails={priceDetails} rating={rating} />
      }
    </div>
  );
};

export default Products;

