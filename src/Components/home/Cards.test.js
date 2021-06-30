import React from 'react';
import Cards from './Cards';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

const mockData = {
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  name: 'bitcoin',
  id: 'bitcoin',
  symbol: 'btc',
  current_price: '29173',
  high_24h: '30759',
  low_24h: '29005',
}

test("render Coin Data while rendering Card component", () => {
  const { getByText } = render(<Cards cardData={mockData} />);
  expect(getByText(mockData.symbol)).toBeDefined();
  expect(getByText(mockData.current_price)).toBeDefined();
  expect(getByText(mockData.high_24h)).toBeDefined();
  expect(getByText(mockData.low_24h)).toBeDefined();
})

test('it renders correctly', () => {
  const tree = renderer.create(<Cards cardData={mockData} />).toJSON();
  expect(tree).toMatchSnapshot()
})