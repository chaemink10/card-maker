import React from 'react';
import { uid } from 'uid';
import style from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <div className={style.editor}>
      <h2 className={style.title}>Card Maker</h2>
      {cards.map((card) => {
        return (
          <section key={uid(card)}>
            <section className={style.row}>
              <input type='text' defaultValue={card.name ? card.name : ''} />
              <input defaultValue={card.company ? card.company : ''} />
              <select name='theme' id='theme' defaultValue={card.theme}>
                <option value='dark'>Dark</option>
                <option value='light'>Light</option>
                <option value='colorful'>Colorful</option>
              </select>
            </section>
            <section className={style.row}>
              <input defaultValue={card.title ? card.title : ''} />
              <input defaultValue={card.email ? card.email : ''} />
            </section>
            <section className={style.row}>
              <textarea
                name='message'
                id='message'
                cols='100'
                rows='3'
                defaultValue={card.message ? card.message : ''}
              ></textarea>
            </section>
            <section className={style.row}>
              <button>Photo</button>
              <button>Delete</button>
            </section>
          </section>
        );
      })}
      <section>
        <section>
          <input type='text' placeholder='Name' />
          <input />
          <select name='theme' id='theme' defaultValue='light'>
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
            <option value='colorful'>Colorful</option>
          </select>
        </section>
        <section>
          <input placeholder={'Title'} />
          <input placeholder={'Email'} />
        </section>
        <section>
          <textarea
            name='message'
            id='message'
            cols='100'
            rows='3'
            placeholder={'Message'}
          ></textarea>
        </section>
        <section>
          <button>Photo</button>
          <button>Delete</button>
        </section>
      </section>
    </div>
  );
};

export default Editor;
