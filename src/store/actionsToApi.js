/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  getAllArticles,
  showLoader,
  hideLoader,
  catchErrors,
} from './articleReducer';

export const getDataFromApi = () => {
  return async function (dispatch) {
    try {
      const rawData = await fetch(process.env.REACT_APP_API_KEY + 'posts');
      dispatch({ type: showLoader.type });
      const data = await rawData.json();
      dispatch({ type: getAllArticles.type, payload: data });
      dispatch({ type: hideLoader.type });
    } catch (error) {
      dispatch({ type: catchErrors.type, payload: error });
      console.log(error);
    }
  };
};
