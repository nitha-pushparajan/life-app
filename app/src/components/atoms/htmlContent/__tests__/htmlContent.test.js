import { render, screen } from '@testing-library/react';
import HTMLContent from '../HTMLContent';

describe('HTMLContent Component', () => {

  test('renders content correctly', () => {
    const content = "<strong>Bold Content</strong>";

    render(<HTMLContent content={content} />);

    // Check if the content has been rendered correctly
    const htmlElement = screen.getByText('Bold Content');
    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement.tagName).toBe('STRONG'); // Check if the tag is properly rendered
  });

  test('renders empty content if no content is provided', () => {
    render(<HTMLContent content="" />);

    // Ensure the element is rendered but has no content inside
    const element = screen.getByRole('paragraph');
    expect(element).toBeEmptyDOMElement();
  });

  test('renders HTML tags correctly', () => {
    const content = "<a href='#'>Click Here</a>";

    render(<HTMLContent content={content} />);

    // Check if the anchor tag is rendered properly
    const anchorElement = screen.getByText('Click Here');
    expect(anchorElement).toHaveAttribute('href', '#');
  });

});