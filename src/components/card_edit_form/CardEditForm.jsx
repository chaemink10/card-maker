import React from 'react';
import Button from '../button/Button';
import style from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, onUpdate, onDelete }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    filename,
    fileurl,
  } = card;

  const onDeleteClick = () => {
    onDelete(card);
  };

  const onChange = (event) => {
    event.preventDefault();
    onUpdate({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onHandleUpload = (fileInfo) => {
    onUpdate({ ...card, filename: fileInfo.name, fileurl: fileInfo.url });
  };

  return (
    <form className={style.form}>
      <input
        className={style.input}
        name='name'
        type='text'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        className={style.input}
        name='company'
        value={company}
        placeholder='Company'
        onChange={onChange}
      />
      <select
        name='theme'
        value={theme}
        className={style.select}
        onChange={onChange}
      >
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={style.input}
        name='title'
        value={title}
        placeholder='Title'
        onChange={onChange}
      />
      <input
        className={style.input}
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <textarea
        name='message'
        value={message}
        onChange={onChange}
        className={style.textarea}
      />
      <div className={style.fileInput}>
        <FileInput
          onUpload={onHandleUpload}
          fileName={filename}
          fileURL={fileurl}
        />
      </div>
      <Button name='Delete' onClick={onDeleteClick} />
    </form>
  );
};

export default CardEditForm;
