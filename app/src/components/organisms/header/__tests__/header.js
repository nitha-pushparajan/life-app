import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { CartProvider } from '@/app/src/lib/context/CartContext';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Header Component', () => {
  test('renders header with logo', () => {
    render(<CartProvider><Header /></CartProvider>);
    const logoElement = screen.getByRole('link');
    expect(logoElement).toBeInTheDocument();
  });
});