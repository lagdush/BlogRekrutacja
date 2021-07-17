import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../types/types';
import { BlogArticle } from '../BlogArticle/BlogArticle';
import { Button } from '../Button/Button';
import { BlogLink } from '../Link/Link';
import style from './favourite.module.css';

export const Favourite: React.FC = () => {
  const { favouriteArticles } = useSelector(
    (state: ReducerType) => state.favourite
  );

  if (favouriteArticles.length === 0) {
    return (
      <div className={style.favourite__emptyList}>
        <p>Add something to your favourite list and return here.</p>
        <BlogLink to="/blog">
          <Button>Go article list</Button>
        </BlogLink>
      </div>
    );
  }

  return (
    <section className={style.favourite__section}>
      {favouriteArticles.map((post) => {
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
