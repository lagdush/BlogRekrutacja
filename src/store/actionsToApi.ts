/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../helpers/client';

export const fetched = createAsyncThunk('articles/fetching', async () => {
  const response = await client.get('posts');
  return response;
});

export const commentsFetch = createAsyncThunk(
  'comments/fetching',
  async (route:string) => {
    const response = await client.get(route);
    return response;
  }
);
