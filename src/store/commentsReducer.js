import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    fetchedComments: [],
    loading: false,
    error: [],
  },
  reducers: {},
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
