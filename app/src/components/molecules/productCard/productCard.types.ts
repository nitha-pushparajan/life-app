export interface ProductCardProps {
  slug: string;
  id: string;
  title: string;
  images: {
    featured_image: string;
  };
  sale: {
    currency: string;
    regular_price: string;
    offer_price: string;
  }
}
