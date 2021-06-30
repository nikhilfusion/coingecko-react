import React from 'react';
import Home from './Home';

import { render, screen } from '@testing-library/react';

test("Header renders with correct text", () => {
  const { getByAltText } = render(<Home />);
  // const headerEl = getByAltText("loader");
  // expect(headerEl.textContent).toBe("Crypto App");
})