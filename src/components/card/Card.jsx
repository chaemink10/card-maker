<<<<<<< HEAD
import React from 'react';
import style from './card.module.css';

const DEFAULT_IMAGE = 'images/default_logo.png';
const Card = ({ card }) => {
=======
import React, { memo } from 'react';
import style from './card.module.css';

const DEFAULT_IMAGE = 'images/default_logo.png';
const Card = memo(({ card }) => {
>>>>>>> parent of 12f1372... Updates
  const { name, company, title, email, message, theme, fileurl } = card;

  const url = fileurl || DEFAULT_IMAGE;

  return (
    <li className={`${style.card} ${getStyles(theme)}`}>
      <img className={style.facephoto} src={url} alt='face' />
      <div className={style.info}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.company}>{company}</p>
        <p className={style.title}>{title}</p>
        <p className={style.email}>{email}</p>
        <p className={style.message}>{message}</p>
      </div>
    </li>
  );
<<<<<<< HEAD
};
=======
});
>>>>>>> parent of 12f1372... Updates

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return style.dark;
    case 'light':
      return style.light;
    case 'colorful':
      return style.colorful;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}
export default Card;
