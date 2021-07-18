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
    builder.addCase(fetched.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetched.fulfilled, (state, action) => {
      state.fetchedArticles = action.payload;
      state.loading = false;
    });
    builder.addCase(fetched.rejected, (state) => {
      state.error='Something went wrong';
    });
  },
});

export const { showLoader, hideLoader, catchErrors } =
  articleSlice.actions;
export default articleSlice.reducer;
