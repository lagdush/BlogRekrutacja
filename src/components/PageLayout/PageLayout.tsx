import React from 'react';
import style from './pageLayout.module.css';

// type PageLayoutProps = {};
export const PageLayout: React.FC = () => {
  return (
    <div className={style.layout}>
      <nav>NAWIGACJA</nav>
      <section>
        <article>ARTYKUL</article>
      </section>
      <footer>STOPKA</footer>
    </div>
  );
};
