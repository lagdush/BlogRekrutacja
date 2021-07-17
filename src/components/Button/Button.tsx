import React, { ReactElement, ReactText } from 'react';
import style from './button.module.css';

type ButtonProps = {
  children: ReactText | ReactElement;
  styleClassName?: 'btn--primary' | 'btn--secondary';
  onClick?: () => void;
};
export const Button: React.FC<ButtonProps> = ({
  children,
  styleClassName = 'btn--primary',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${style[styleClassName]}`}
    >
      {children}
    </button>
  );
};
