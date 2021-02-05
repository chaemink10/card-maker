import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import style from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {
    console.log('click');
  };

  return (
    <form className={style.form}>
      <input
        className={style.input}
        type='text'
        defaultValue={name}
        placeholder='Name'
      />
      <input
        className={style.input}
        defaultValue={company}
        placeholder='Company'
      />
      <select name='theme' defaultValue={theme} className={style.select}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input className={style.input} defaultValue={title} placeholder='Title' />
      <input className={style.input} defaultValue={email} placeholder='Email' />
      <textarea
        name='message'
        defaultValue={message ? message : ''}
        className={style.textarea}
        placeholder='Message'
      ></textarea>
      <div className={style.fileInput}>
        <ImageFileInput />
      </div>
      {prop.card ? (
        <Button name='Delete' onClick={onSubmit} />
      ) : (
        <Button name='Add' onClick={onSubmit} />
      )}
    </form>
  );
};

export default CardEditForm;
