import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsFromApi } from '../../store/commentsActionsToApi';
import { FetchedPosts, ParamsType, ReducerType } from '../../types/types';
import { ErrorPage } from '../404Page/ErrorPage';
import { Button } from '../Button/Button';
import { Comments } from '../Comments/Comments';
import { BlogLink } from '../Link/Link';
import { Loader } from '../Loader/Loader';
import style from './blogFullArticle.module.css';

// TODO: delete all unnecessary comments console.logs
// TODO: ADD tests!!!

export const BlogFullArticle = () => {
  const { id } = useParams<ParamsType>();
  const dispatch = useDispatch();

  const { fetchedComments, loading, error } = useSelector(
    (state: ReducerType) => state.comments
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
        <Button styleClassName="btn--secondary">Add to favourite</Button>
      </div>

      <div>
        <h3
          className={`${style.article__text} ${style.article__commentsSectionTitle}`}
        >
          Comments
        </h3>
        {fetchedComments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              body={comment.body}
              email={comment.email}
            />
          );
        })}
      </div>
    </article>
  );
};
