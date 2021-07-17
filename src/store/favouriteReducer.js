import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteArticles: [],
    favouriteComments: [],
  },
  reducers: {
    addArticleToFavourite: (data, action) => {
      if (data.favouriteArticles.some((el) => el.id === action.payload.id)) {
        return;
      }
      data.favouriteArticles.push(action.payload);
    },
    removeArticleFromFavourite: (data, action) => {
      const index = data.favouriteArticles.indexOf(action.payload);
      data.favouriteArticles.splice(index, 1);
    },
    addCommentToFavourite: (data, action) => {
      if (data.favouriteComments.some((el) => el.id === action.payload.id)) {
        return;
      }
      data.favouriteComments.push(action.payload);
    },
  },
});

export const {
  addArticleToFavourite,
  addCommentToFavourite,
  removeArticleFromFavourite,
} = favouriteSlice.actions;
export default favouriteSlice.reducer;
