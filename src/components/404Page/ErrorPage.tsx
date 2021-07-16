import React from 'react';
import { BlogLink } from '../Link/Link';
import { Button } from '../Button/Button';
import style from './errorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={style.errorPage}>
      <h1
        className={`${style.errorPage__header} ${style['errorPage--gradientText']}`}
      >
        Ooops...
      </h1>
      <p className={style.errorPage__errorName}>404 - page not found</p>
      <p className={style.errorPage__errorMessage}>
        The page you are looking for might have been removed, had its name
        changed or does not exists.
      </p>
      <BlogLink to="/">
        <Button>Go to Homepage</Button>
      </BlogLink>
    </div>
  );
};
