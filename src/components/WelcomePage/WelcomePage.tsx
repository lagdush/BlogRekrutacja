import React from 'react';
import style from './welcomePage.module.css';
import { Button } from '../Button/Button';
import { BlogLink } from '../Link/Link';

export const WelcomePage = () => {
  return (
    <div className={style.welcomePage}>
      <h1 className={style.welcomePage__Logo}>Best Blog</h1>
      <div className={style.welcomePage__Wrapper}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          quisquam ad sed? Illum dolores, similique voluptates quas sint
          aspernatur temporibus minus culpa autem exercitationem officiis
          incidunt ratione ipsam cumque unde.
        </p>

        <BlogLink to="/blog">
          <Button>Blog</Button>
        </BlogLink>
      </div>
    </div>
  );
};
