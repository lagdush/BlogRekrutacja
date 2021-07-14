import React from 'react';
import style from './app.module.css';
import { ReactComponent as Test } from '../assets/Pet, Animal _ dog, training, love, care, woman, home, girl, happy, leisureTEST.svg';

const App = () => {
  return (
    <>
      <div className={style.test}>Hello Worlda</div>
      <Test />
    </>
  );
};

export default App;
