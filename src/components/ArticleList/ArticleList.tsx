import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticlesFromApi } from '../../store/articlesActionsToApi';
import { ReducerType } from '../../types/types';
import { ErrorPage } from '../404Page/ErrorPage';
import { BlogArticle } from '../BlogArticle/BlogArticle';
import { Loader } from '../Loader/Loader';
import style from './articleList.module.css';

export const ArticleList: React.FC = () => {
  const { fetchedArticles, loading, error } = useSelector(
    (state: ReducerType) => state.articles
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesFromApi());
  }, [dispatch]);

  if (!fetchedArticles) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error="Somethig went wrong." />;
  }
  return loading ? (
    <Loader />
  ) : (
    <section className={style.article__section}>
      {fetchedArticles.map((post) => {
        return (
          <BlogArticle
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        );
      })}
    </section>
  );
};
