import React from 'react';
import style from './blogArticle.module.css';

type BlogArticleProps = {
  title: string;
  body: string;
  key?: string | number;
};

export const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  body,
  key,
}) => {
  console.log(title);
  return (
    <article className={style.article} key={key}>
      <h3 className={style.article__header}>{title}</h3>
      <p className={style.article__text}>{body.slice(0, 75)+'...'}</p>
    </article>
  );
};
