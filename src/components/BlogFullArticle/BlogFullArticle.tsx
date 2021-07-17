import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsFromApi } from '../../store/commentsActionsToApi';
import {
  addArticleToFavourite,
  removeArticleFromFavourite,
} from '../../store/favouriteReducer';
import { ParamsType, ReducerType } from '../../types/types';
import { ErrorPage } from '../404Page/ErrorPage';
import { Button } from '../Button/Button';
import { Comments } from '../Comments/Comments';
import { BlogLink } from '../Link/Link';
import { Loader } from '../Loader/Loader';
import style from './blogFullArticle.module.css';

export const BlogFullArticle: React.FC = () => {
  const { id } = useParams<ParamsType>();
  const dispatch = useDispatch();

  const { fetchedComments, loading, error } = useSelector(
    (state: ReducerType) => state.comments
  );

  const { favouriteArticles } = useSelector(
    (state: ReducerType) => state.favourite
  );

  const { fetchedArticles } = useSelector(
    (state: ReducerType) => state.articles
  );

  useEffect(() => {
    dispatch(getCommentsFromApi(`posts/${id}/comments`));
  }, [dispatch, id]);

  const [blogArticle] = fetchedArticles.filter(
    (article) => article.id === Number(id)
  );

  const isFavourite = favouriteArticles.some((el) => {
    return el.id === Number(id);
  });

  const addToFavourite = () => {
    dispatch({ type: addArticleToFavourite.type, payload: blogArticle });
  };

  const removeArtFromFavourite = () => {
    dispatch({
      type: removeArticleFromFavourite.type,
      payload: blogArticle.id,
    });
  };

  if (!fetchedComments || loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage error="Somethig went wrong." />;
  }
  return (
    <article className={style.article}>
      <h1 className={style.article__header}>{blogArticle.title}</h1>
      <p className={style.article__text}>{blogArticle.body}</p>
      <div className={style.article__buttons}>
        <BlogLink to="/blog">
          <Button>Return to all articles</Button>
        </BlogLink>
        {isFavourite ? (
          <Button
            styleClassName="btn--secondary"
            onClick={removeArtFromFavourite}
          >
            Remove from favourite
          </Button>
        ) : (
          <Button styleClassName="btn--secondary" onClick={addToFavourite}>
            Add to favourite
          </Button>
        )}
      </div>

      <div>
        <p
          className={`${style.article__text} ${style.article__commentsSectionTitle}`}
        >
          Comments
        </p>
        {fetchedComments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              id={comment.id}
              body={comment.body}
              email={comment.email}
            />
          );
        })}
      </div>
    </article>
  );
};
