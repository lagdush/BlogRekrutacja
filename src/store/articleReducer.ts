import { createSlice } from '@reduxjs/toolkit';
import { ArticlesInitialState } from '../types/types';
import { fetched } from './actionsToApi';

const initialState = {
    fetchedArticles: [],
    loading: false,
    error: '',
  } as ArticlesInitialState;

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetched.fulfilled, (state, action) => {
      state.fetchedArticles = action.payload;
    });
  },
});

export const { showLoader, hideLoader, catchErrors } =
  articleSlice.actions;
export default articleSlice.reducer;
