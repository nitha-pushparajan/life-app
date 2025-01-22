import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

// Mocked Props
const productProps = {
  slug: 'product-1',
  id: '123',
  title: 'Product Title',
  images: { featured_image: 'https://example.com/image.jpg' },
  sale: {
    currency: 'AED',
    regular_price: '100',
    offer_price: '80',
  },
};

describe('ProductCard', () => {
  
  test('renders product title', () => {
    render(<ProductCard {...productProps} />);
    const titleElement = screen.getByText(/Product Title/i);
    expect(titleElement).toBeInTheDocument();
  });


  test('renders correct product prices', () => {
    render(<ProductCard {...productProps} />);
    
    // Check for regular price and offer price (Sale Price)
    const regularPrice = screen.getByText('AED 100');
    expect(regularPrice).toBeInTheDocument();

    const offerPrice = screen.getByText('AED 80');
    expect(offerPrice).toBeInTheDocument();
  });

  test('renders link to the product detail page with correct href', () => {
    render(<ProductCard {...productProps} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'products/product-1');
  });
});