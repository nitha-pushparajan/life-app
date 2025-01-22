import { ProductDetails } from '@/app/src/components/organisms/productDetails';
import ProductPageLoader from '@/app/src/components/molecules/Loader/productPageLoader';
import Head from 'next/head';
import React from 'react';

// Fetch the product data on the server side using async/await
async function fetchProductData(slug: string) {
  const res = await fetch(`https://prodapp.lifepharmacy.com/api/v1/product/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }
  const data = await res.json();
  return data.data;
}

const ProductsPage = async ({ params }: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  // Fetch data directly in the component
  const productData = await fetchProductData(slug);
  const productDetails = productData?.product_details;
  const images = productDetails?.images?.gallery_images || [];
  const priceDetails = productDetails?.sale || {};
  const rating = productData?.ratings;
  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20 bg-[#F7F7F7]">
      <Head>
        <title>{productData?.product_details?.title}</title>
        <meta name="description" content={productData?.product_details?.title} />
      </Head>

      {/* Use Suspense for the loading state */}
      <React.Suspense fallback={<ProductPageLoader />}>
        <ProductDetails images={images} productDetails={productDetails} priceDetails={priceDetails} rating={rating} />
      </React.Suspense>
    </div>
  );
};

export default ProductsPage;