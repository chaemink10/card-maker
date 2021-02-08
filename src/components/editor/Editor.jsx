import React from 'react';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';
import style from './editor.module.css';

const Editor = ({ cards, onAdd, onUpdate, onDelete }) => {
  return (
    <div className={style.editor}>
      <h2 className={style.title}>Card Maker</h2>
      {cards.map((card) => {
        return (
          <CardEditForm
            card={card}
            key={card.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
      <CardAddForm card={cards} onAdd={onAdd} />
    </div>
  );
};

export default Editor;
