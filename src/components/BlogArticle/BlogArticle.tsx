import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import { BlogLink } from '../Link/Link';
import style from './blogArticle.module.css';

// TODO: catch post id and call to comment
// TODO: Add redux
// TODO: Move all logic to redux
// TODO: create usefetch hook
// TODO: Think about pagination
// TODO: add tests

type BlogArticleProps = {
  title: string;
  body: string;
  id: number;
  key?: string | number;
};

export const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  body,
  id,
}) => {
  return (
    <article className={style.article}>
      <h3 className={style.article__header}>{title.toUpperCase()}</h3>
      <p className={style.article__text}>{body.slice(0, 75) + '...'}</p>
      <BlogLink to={`/blog/${id}`}>
        <Button styleClassName="btn--secondary">Read more</Button>
      </BlogLink>
    </article>
  );
};
