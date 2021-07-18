import { createSlice } from '@reduxjs/toolkit';
import { CommentsInitialState } from '../types/types';
import { commentsFetch } from './actionsToApi';

const initialState = {
    fetchedComments: [],
    loading: false,
    error: '',
  } as CommentsInitialState;

const commentsSlice = createSlice({
  name: 'comments',
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
    builder.addCase(commentsFetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(commentsFetch.fulfilled, (state, action) => {
      state.fetchedComments = action.payload;
      state.loading = false;
    });
  },
});

export const { showLoader, hideLoader, catchErrors } =
  commentsSlice.actions;
export default commentsSlice.reducer;
