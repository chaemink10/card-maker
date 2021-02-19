import React from 'react';
import Card from '../card/Card';
import style from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <div className={style.preview}>
      <h2 className={style.title}>Card Preview</h2>
      {cards && (
        <ul key={cards.key} className={style.cardlist}>
          {Object.keys(cards).map((key) => (
            <Card key={key} card={cards[key]} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Preview;
