import React from 'react';
import { uid } from 'uid';
import style from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <div className={style.preview}>
      <h2 className={style.title}>Card Preview</h2>
      {cards.map((card) => {
        return (
          <div
            key={uid(card)}
            className={
              card.theme === 'light'
                ? style.theme_light
                : card.theme === 'dark'
                ? style.theme_dark
                : card.theme === 'colorful'
                ? style.theme_colorfor
                : ''
            }
          >
            <img src='/images/default_logo.png' alt='face' />
            <div>
              <div>{card.name}</div>
              <div>{card.compnay}</div>
              <div>{card.title}</div>
              <div>{card.email}</div>
              <div>{card.message}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
