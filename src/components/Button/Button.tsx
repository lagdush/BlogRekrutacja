import React, { ReactElement, ReactText } from 'react';
import style from './button.module.css';

type ButtonProps = {
  children: ReactText | ReactElement;
  styleClassName?: 'btn--primary' | 'btn--secondary' | 'btn--special';
};
export const Button: React.FC<ButtonProps> = ({
  children,
  styleClassName = 'btn--primary',
}) => {
  return <button className={`${style.btn} ${style[styleClassName]}`}>{children}</button>;
};
