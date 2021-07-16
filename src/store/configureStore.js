import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './articleReducer';
import commentsSlice from './commentsReducer';

const store = configureStore({
  reducer: {
    articles: articleSlice,
    comments: commentsSlice,
  },
});

export default store;
