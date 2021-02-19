import React from 'react';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';
import style from './editor.module.css';

const Editor = ({ FileInput, cards, onAdd, onUpdate, onDelete }) => {
  return (
    <div className={style.editor}>
      <h2 className={style.title}>Card Maker</h2>

      {cards &&
        Object.keys(cards).map((key) => (
          <CardEditForm
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      <CardAddForm card={cards} onAdd={onAdd} FileInput={FileInput} />
    </div>
  );
};

export default Editor;
