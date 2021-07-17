import { configureStore } from '@reduxjs/toolkit';
import { loadState } from '../helpers/localStorage';
import articleSlice from './articleReducer';
import commentsSlice from './commentsReducer';

const store = configureStore({
  reducer: {
    articles: articleSlice,
    comments: commentsSlice,
  },
  preloadedState: loadState(),
});

export default store;
