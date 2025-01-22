import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders header with logo', () => {
    render(<Header />);
    const logoElement = screen.getByRole('link');
    expect(logoElement).toBeInTheDocument();
  });
});