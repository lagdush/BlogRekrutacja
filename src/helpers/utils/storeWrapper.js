/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import articleSlice from '../../store/articleReducer';
import commentsSlice from '../../store/commentsReducer';
import favouriteReducer from '../../store/favouriteReducer';
export * from '@testing-library/react';
// const fetchedPostsArray = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
//   },
// ];
// const articlesInitialState = {
//   fetchedArticles: fetchedPostsArray,
//   loading: false,
//   error: '',
// };
// const commentsInitialState = {
//   fetchedComments: [
//     {
//       postId: 1,
//       id: 2,
//       name: 'quo vero reiciendis velit similique earum',
//       email: 'Jayne_Kuhic@sydney.com',
//       body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
//     },
//   ],
//   loading: false,
//   error: '',
// };

// const favouriteInitialState = {
//   favouriteArticles: fetchedPostsArray,
//   favouriteComments: [
//     {
//       postId: 1,
//       id: 2,
//       name: 'quo vero reiciendis velit similique earum',
//       email: 'Jayne_Kuhic@sydney.com',
//       body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
//     },
//   ],
// };

export function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        articles: articleSlice,
        comments: commentsSlice,
        favourite: favouriteReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
