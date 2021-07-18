import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../types/types';
import { BlogArticle } from '../BlogArticle/BlogArticle';
import { Button } from '../Button/Button';
import { Comments } from '../Comments/Comments';
import { BlogLink } from '../Link/Link';
import style from './favourite.module.css';

export const Favourite: React.FC = () => {
  const { favouriteArticles, favouriteComments } = useSelector(
    (state: ReducerType) => state.favourite
  );

  if (favouriteArticles.length === 0 && favouriteComments.length === 0) {
    return (
      <div className={style.favourite__emptyList}>
        <p>Add something to your favourite list and return here.</p>
        <BlogLink to="/">
          <Button>Go article list</Button>
        </BlogLink>
      </div>
    );
  }

  return (
    <>
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
      <section className={style.favourite__section}>
        {favouriteComments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              email={comment.email}
              body={comment.body}
              id={comment.id}
            />
          );
        })}
      </section>
    </>
  );
};
