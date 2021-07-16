import React from 'react';
import style from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      Created by{' '}
      <a className={`${style['footer--link']}`}href="https://github.com/lagdush" target="_blank" rel="noreferrer">
        Łukasz Żurawski
      </a>
    </footer>
  );
};
