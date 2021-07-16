import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Button } from '../Button/Button';
import style from './comments.module.css';

type Comment = {
  body: string;
  email: string;
};

export const Comments: React.FC<Comment> = ({ body, email }) => {
  return (
    <div className={style.comments}>
      <p className={style.comments__text}>{body}</p>
      <p className={style.comments__email}>{email}</p>
      <Button styleClassName="btn--special--ico">
        <IoIosHeartEmpty />
      </Button>
    </div>
  );
};
