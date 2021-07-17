import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesFromApi } from '../../store/articlesActionsToApi';
import { BlogLink } from '../Link/Link';
import { BlogArticle } from '../BlogArticle/BlogArticle';
import style from './blog.module.css';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { ErrorPage } from '../404Page/ErrorPage';
import { ReducerType } from '../../types/types';

export const PageLayout: React.FC = () => {
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
    <div className={style.blog}>
      <header>
        <BlogLink to="/">
          <h1 className={style.blog__header}>Best Blog</h1>
        </BlogLink>
      </header>
      <section className={style.blog__section}>
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
      <Footer />
    </div>
  );
};
