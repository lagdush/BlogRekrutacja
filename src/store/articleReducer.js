import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    fetchedArticles: [],
    loading: false,
    error: '',
  },
  reducers: {
    getAllArticles: (data, action) => {
      data.fetchedArticles = action.payload;
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

export const { getAllArticles, showLoader, hideLoader, catchErrors } =
  articleSlice.actions;
export default articleSlice.reducer;
