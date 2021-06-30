import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';

test("Header renders with correct text", () => {
  const { getByTestId } = render(<Header />);
  const headerEl = getByTestId("title");
  expect(headerEl.textContent).toBe("Crypto App");
})

test("Header renders with Button text", () => {
  const { getByTestId } = render(<Header />);
  const headerEl = getByTestId("login");
  expect(headerEl.textContent).toBe("Login");
})

