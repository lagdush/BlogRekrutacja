import React, { ReactElement, ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import { BlogLink } from '../Link/Link';
import style from './blogTemplate.module.css';

type BlogTemplateProps = {
  children: ReactElement[] | ReactNode;
};

export const BlogTemplate: React.FC<BlogTemplateProps> = ({ children }) => {
  return (
    <div className={style.blog}>
      <header className={style.blog__header}>
        <BlogLink to="/">
          <h1 className={style.header__logo}>Best Blog</h1>
        </BlogLink>
        <BlogLink to="/blog/favourite">Go to favourite</BlogLink>
      </header>
      {children}
      <Footer />
    </div>
  );
};
