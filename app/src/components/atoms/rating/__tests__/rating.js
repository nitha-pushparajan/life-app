import { render, screen } from '@testing-library/react';
import Rating from '../Rating';

describe('Rating Component', () => {
  test('renders the correct number of stars and review count', () => {
    render(<Rating value={3} count={5} />);

    // Check that the review count is displayed correctly
    const reviewText = screen.getByText('3 - 5 reviews');
    expect(reviewText).toBeInTheDocument();
  });
});