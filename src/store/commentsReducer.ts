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

export default commentsSlice.reducer;
