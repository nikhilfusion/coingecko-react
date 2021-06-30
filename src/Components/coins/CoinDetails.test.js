import React from 'react';
import { render, screen, } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'

import CoinDetails from './CoinDetails';

const renderComponent = ({ id }) =>
  render(
    <MemoryRouter initialEntries={[`/coins/${id}`]}>
      <Route path="/coins/:id">
        <CoinDetails />
      </Route>
    </MemoryRouter>
  );

test("renders with Title", async () => {
  const { getByText } = renderComponent({ id: 'bitcoin' });
  const title = getByText(/Coin Details/i);
  const symbolTitle = getByText(/Symbol/i);
  expect(title).toBeInTheDocument();
  expect(symbolTitle).toBeInTheDocument();
})
