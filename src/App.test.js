/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import articleSlice from './store/articleReducer';
import commentsSlice from './store/commentsReducer';
import favouriteReducer from './store/favouriteReducer';
import App from './components/App';

function renderer(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        articles: articleSlice,
        comments: commentsSlice,
        favourite: favouriteReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

const text = 'Best Blog';
describe('Label', () => {
  it('renders correctly', () => {
    renderer(<App />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
