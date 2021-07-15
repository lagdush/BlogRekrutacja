import React, { ReactElement, ReactText } from 'react';
import { Link } from 'react-router-dom';
import style from './link.module.css';

type LinkProps = {
  children: ReactText | ReactElement;
  to: string;
};
export const BlogLink: React.FC<LinkProps> = ({ children, to }) => {
  return (
    <Link className={style.link} to={to}>
      {children}
    </Link>
  );
};
