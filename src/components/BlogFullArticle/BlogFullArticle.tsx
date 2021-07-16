import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Comments } from '../Comments/Comments';
import { BlogLink } from '../Link/Link';
import style from './blogFullArticle.module.css';

type ParamsType = {
  id?: string | undefined;
};

type Article = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Comments = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export const BlogFullArticle = () => {
  const { id } = useParams<ParamsType>();
  const [blogPost, setBlogPost] = useState<Article>();
  const [comments, setComments] = useState<Comments[]>();

  const fetchArticle = async () => {
    const rawPosts = await fetch(process.env.REACT_APP_API_KEY + `posts/${id}`);
    const post = await rawPosts.json();
    setBlogPost(post);
  };

  const fetchComments = async () => {
    const rawPosts = await fetch(
      process.env.REACT_APP_API_KEY + `posts/${id}/comments`
    );
    const comments = await rawPosts.json();
    setComments(comments);
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  useEffect(() => {
    fetchComments();
  }, []);
  if (!blogPost || !comments) {
    return <h3>LOL</h3>;
  }
  return (
    <article className={style.article}>
      <h1 className={style.article__header}>{blogPost.title}</h1>
      <p className={style.article__text}>{blogPost.body}</p>
      <BlogLink to="/blog">
        <Button>Return to all articles</Button>
      </BlogLink>
      <div>
        <h3
          className={`${style.article__text} ${style.article__commentsSectionTitle}`}
        >
          Comments
        </h3>
        {comments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              body={comment.body}
              email={comment.email}
            />
          );
        })}
      </div>
    </article>
  );
};
