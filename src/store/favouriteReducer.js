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
      const index = data.favouriteArticles.findIndex(
        (el) => el.id === action.payload
      );
      data.favouriteArticles.splice(index, 1);
    },
    addCommentToFavourite: (data, action) => {
      if (data.favouriteComments.some((el) => el.id === action.payload.id)) {
        return;
      }
      data.favouriteComments.push(action.payload);
    },
    removeCommentFromFavourite: (data, action) => {
      const index = data.favouriteComments.findIndex(
        (el) => el.id === action.payload
      );
      data.favouriteComments.splice(index, 1);
    },
  },
});

export const {
  addArticleToFavourite,
  addCommentToFavourite,
  removeArticleFromFavourite,
  removeCommentFromFavourite,
} = favouriteSlice.actions;
export default favouriteSlice.reducer;
