import { client } from '../helpers/client';
import {
  getCommentsForArticle,
  showLoader,
  hideLoader,
  catchErrors,
} from './commentsReducer';

export const getCommentsFromApi = (route) => {
  return async function (dispatch) {
    try {
      dispatch({ type: showLoader.type });
      const data = await client.get(route);
      dispatch({ type: getCommentsForArticle.type, payload: data });
      dispatch({ type: hideLoader.type });
    } catch (error) {
      dispatch({ type: catchErrors.type, payload: error });
    }
  };
};
