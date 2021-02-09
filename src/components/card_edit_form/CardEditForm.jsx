import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import style from './card_edit_form.module.css';

const CardEditForm = ({ card, onUpdate, onDelete, imageService }) => {
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

  const onHandleUpload = (target) => {
    imageService.upload(target.current.files['0']).then((data) => {
      card.fileURL = data.url;
      card.fileName = data.original_filename;
      onUpdate(card);
    });
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
        <ImageFileInput
          onUpload={onHandleUpload}
          fileName={fileName}
          fileURL={fileURL}
        />
      </div>
      <Button name='Delete' onClick={onDeleteClick} />
    </form>
  );
};

export default CardEditForm;
