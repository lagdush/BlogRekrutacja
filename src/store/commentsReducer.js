import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    fetchedComments: [],
    loading: false,
    error: '',
  },
  reducers: {
    getCommentsForArticle: (data, action) => {
      data.fetchedComments = action.payload;
    },
    showLoader: (data) => {
      data.loading = true;
    },
    hideLoader: (data) => {
      data.loading = false;
    },
    catchErrors: (data, action) => {
      data.error = action.payload;
    },
  },
});

export const { getCommentsForArticle, showLoader, hideLoader, catchErrors } =
  commentsSlice.actions;
export default commentsSlice.reducer;
