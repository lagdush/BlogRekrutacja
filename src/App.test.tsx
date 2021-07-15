/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './components/App';

const text = 'Hello World';
describe('Label', () => {
  it('renders correctly', () => {
    render(<App />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
