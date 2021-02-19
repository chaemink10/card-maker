<<<<<<< HEAD
import React from 'react';
import style from './button.module.css';

const Button = ({ name, onClick }) => (
  <button className={style.button} onClick={onClick}>
    {name}
  </button>
);
=======
import React, { memo } from 'react';
import style from './button.module.css';

const Button = memo(({ name, onClick }) => (
  <button className={style.button} onClick={onClick}>
    {name}
  </button>
));
>>>>>>> parent of 12f1372... Updates

export default Button;
