import React from 'react';
import { IoIosHeartEmpty, IoIosRemoveCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentToFavourite,
  removeCommentFromFavourite,
} from '../../store/favouriteReducer';
import { ReducerType } from '../../types/types';
import style from './comments.module.css';

type Comment = {
  body: string;
  email: string;
  id: number;
};

export const Comments: React.FC<Comment> = ({ body, email, id }) => {
  const dispatch = useDispatch();
  const addCommentToFav = () => {
    dispatch({
      type: addCommentToFavourite.type,
      payload: { id, body, email },
    });
  };
  const { favouriteComments } = useSelector(
    (state: ReducerType) => state.favourite
  );
  const isFavourite = favouriteComments.some((el) => {
    return el.id === id;
  });
  const removeCommentFromFav = () => {
    dispatch({
      type: removeCommentFromFavourite.type,
      payload: id,
    });
  };
  return (
    <div className={style.comments}>
      <p className={style.comments__text}>{body}</p>
      <p className={style.comments__email}>{email}</p>
      {isFavourite ? (
        <IoIosRemoveCircleOutline
          className={style.comments__ico}
          onClick={removeCommentFromFav}
        />
      ) : (
        <IoIosHeartEmpty
          className={style.comments__ico}
          onClick={addCommentToFav}
        />
      )}
    </div>
  );
};
