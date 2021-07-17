import React from 'react';
import style from './loader.module.css';
export const Loader: React.FC = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader__animation}></div>
    </div>
  );
};
