import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

test("Header renders with correct text", () => {
  const { getByTestId } = render(<Header />);
  const headerEl = getByTestId("title");
  expect(headerEl.textContent).toBe("Crypto App");
})

test("Check Login button exist", () => {
  render(<Header />);
  expect(screen.getByRole('button')).toHaveTextContent('Login');
})

test('it renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot()
})

