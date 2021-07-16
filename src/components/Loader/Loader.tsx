import React from 'react';
import style from './loader.module.css';
export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader__animation}></div>
    </div>
  );
};
