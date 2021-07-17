import React, { ReactElement } from 'react';
import { Footer } from '../Footer/Footer';
import { BlogLink } from '../Link/Link';
import style from './blogTemplate.module.css';

type BlogTemplateProps = {
  children: ReactElement[];
};

export const BlogTemplate: React.FC<BlogTemplateProps> = ({ children }) => {
  return (
    <div className={style.blog}>
      <header>
        <BlogLink to="/">
          <h1 className={style.blog__header}>Best Blog</h1>
        </BlogLink>
      </header>
      {children}
      <Footer />
    </div>
  );
};
