import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../helpers/utils/storeWrapper';
import App from './App';

const text = 'Best Blog';
describe('App component tests', () => {
  it('should renders correctly', () => {
    render(<App />);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Go to favourite')).toBeInTheDocument();
  });
});
