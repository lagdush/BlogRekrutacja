import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    fetchedArticles: [],
    loading: false,
    error: [],
  },
  reducers: {},
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
