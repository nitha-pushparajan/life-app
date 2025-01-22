import { render, screen } from '@testing-library/react';
import PageTitle from '../PageTitle';  // Correct import path

describe('PageTitle component', () => {
  it('renders the title text', () => {
    render(<PageTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});