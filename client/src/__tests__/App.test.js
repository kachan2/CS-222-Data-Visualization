import { render, screen } from '@testing-library/react';
import App from '../app/App';

test('renders App', () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent("Interactive Maps");
});