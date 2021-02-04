import React from 'react';
import { uid } from 'uid';
import Card from '../card/Card';
import style from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <div className={style.preview}>
      <h2 className={style.title}>Card Preview</h2>
      {cards.map((card) => {
        return (
          <ul key={uid(card)} className={style.cardlist}>
            <Card card={card} />
          </ul>
        );
      })}
    </div>
  );
};

export default Preview;
