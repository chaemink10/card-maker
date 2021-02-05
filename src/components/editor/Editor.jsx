import React from 'react';
import { uid } from 'uid';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';
import style from './editor.module.css';

const Editor = ({ cards, onAdd }) => {
  return (
    <div className={style.editor}>
      <h2 className={style.title}>Card Maker</h2>
      {cards.map((card) => {
        return <CardEditForm card={card} key={uid(card)} />;
      })}
      <CardAddForm card={cards} onAdd={onAdd} />
    </div>
  );
};

export default Editor;
