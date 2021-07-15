import React, { useEffect } from 'react';
import style from './pageLayout.module.css';

// type PageLayoutProps = {};
export const PageLayout: React.FC = () => {
  const fetchPosts = async () => {
    const rawPosts = await fetch(process.env.REACT_APP_API_KEY + 'posts');
    const posts = await rawPosts.json();
    console.log(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
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
