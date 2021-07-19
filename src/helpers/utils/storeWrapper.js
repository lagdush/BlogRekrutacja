/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import articleSlice from '../../store/articleReducer';
import commentsSlice from '../../store/commentsReducer';
import favouriteReducer from '../../store/favouriteReducer';
export * from '@testing-library/react';

export const render = (
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
) => {
  const Wrapper = ({ children }) => {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
