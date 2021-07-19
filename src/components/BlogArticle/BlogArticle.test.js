import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../helpers/utils/storeWrapper';
import { BlogArticle } from './BlogArticle';

describe('BlogArticle component tests', () => {
  it('should renders correctly, title should be display with with upperCase', () => {
    render(<BlogArticle title="test" body="body" id={1} />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
