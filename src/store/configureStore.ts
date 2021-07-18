import { configureStore } from '@reduxjs/toolkit';
import { loadState } from '../helpers/localStorage';
import articleSlice from './articleReducer';
import commentsSlice from './commentsReducer';
import favouriteReducer from './favouriteReducer';

const store = configureStore({
  reducer: {
    articles: articleSlice,
    comments: commentsSlice,
    favourite: favouriteReducer,
  },
  preloadedState: loadState(),
});

export default store;
