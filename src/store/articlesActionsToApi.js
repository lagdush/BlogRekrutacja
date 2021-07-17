/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { client } from '../helpers/client';
import {
  getAllArticles,
  showLoader,
  hideLoader,
  catchErrors,
} from './articleReducer';

export const getArticlesFromApi = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: showLoader.type });
      const data = await client.get('posts');
      dispatch({ type: getAllArticles.type, payload: data });
      localStorage.setItem('posts', JSON.stringify(data));
      dispatch({ type: hideLoader.type });
    } catch (error) {
      dispatch({ type: catchErrors.type, payload: error });
    }
  };
};
