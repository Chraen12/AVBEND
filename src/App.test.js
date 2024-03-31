import { render, screen } from '@testing-library/react';
import App from './App';
import Addminuser from './user';

test('renders learn react link', () => {
  render(<Addminuser />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
