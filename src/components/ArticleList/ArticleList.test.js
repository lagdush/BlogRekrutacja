import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '../../helpers/utils/storeWrapper';
import { ArticleList } from './ArticleList';
import { useSelector, useDispatch } from 'react-redux';

const fetchedPostsArray = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
];

const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/posts',
    async (req, res, ctx) => {
      return res(ctx.json(fetchedPostsArray));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App component tests', () => {
  it('should renders correctly', async () => {
    render(<ArticleList />);
    const { fetchedArticles } = useSelector((state) => state.articles);
    console.log(fetchedArticles[1]);
    expect(screen.getByText(data)).toBeInTheDocument();
  });
});
