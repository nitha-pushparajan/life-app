import { render, screen } from '@testing-library/react';
import Price from '../Price';

describe('Price component', () => {
  it('renders the regular price and offer price', () => {
    render(<Price regular_price={100} offer_price={80} currency="AED" />);

    const regularPrice = screen.getByText('AED 100');
    const offerPrice = screen.getByText('AED 80');

    expect(regularPrice).toBeInTheDocument();
    expect(offerPrice).toBeInTheDocument();
  });

  it('renders only the regular price when regular and offer prices are the same', () => {
    render(<Price regular_price={100} offer_price={100} currency="AED" />);

    const regularPrice = screen.getByText('AED 100');
    expect(regularPrice).toBeInTheDocument();
    const oldPrice = screen.queryByTestId('old-price');
    expect(oldPrice).toBeNull();
  });
});