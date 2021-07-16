import React, { useEffect, useState } from 'react';
import { BlogLink } from '../Link/Link';
import { BlogArticle } from '../BlogArticle/BlogArticle';
import style from './blog.module.css';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

// type PageLayoutProps = {};
type FetchedPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const PageLayout: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<FetchedPosts[]>();
  const [load, setLoad] = useState(false);
  const fetchPosts = async () => {
    setLoad(true);
    const rawPosts = await fetch(process.env.REACT_APP_API_KEY + 'posts');
    const post = await rawPosts.json();
    setBlogPosts(post);
    setLoad(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (!blogPosts) {
    return <Loader />;
  }

  return load ? (
    <Loader />
  ) : (
    <div className={style.blog}>
      <header>
        <BlogLink to="/">
          <h1 className={style.blog__header}>Best Blog</h1>
        </BlogLink>
      </header>
      <section className={style.blog__section}>
        {blogPosts.map((post) => {
          return (
            <BlogArticle
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
};
