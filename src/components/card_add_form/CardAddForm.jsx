import React, { useRef } from 'react';
import { uid } from 'uid';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import style from './card_add_form.module.css';

const CardAddForm = ({ onAdd, imageService }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  let fileURLValue = {};
  let fileNameValue = {};

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: uid(),
      name: nameRef.current.value || ' ',
      company: companyRef.current.value || ' ',
      theme: themeRef.current.value,
      title: titleRef.current.value || ' ',
      email: emailRef.current.value || ' ',
      message: messageRef.current.value || ' ',
      fileURL: fileURLValue || ' ',
      fileName: fileNameValue || ' ',
    };
    formRef.current.reset();
    onAdd(card);
  };

  const onHandleUpload = (target) => {
    imageService.upload(target.current.files['0']).then((data) => {
      fileURLValue = data.url;
      fileNameValue = data.original_filename;
    });
  };

  return (
    <form ref={formRef} className={style.form}>
      <input
        ref={nameRef}
        className={style.input}
        type='text'
        placeholder='Name'
        name='name'
      />
      <input
        ref={companyRef}
        className={style.input}
        placeholder='Company'
        name='company'
      />
      <select ref={themeRef} name='theme' className={style.select}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={style.input}
        placeholder='title'
        name='title'
      />
      <input
        ref={emailRef}
        className={style.input}
        placeholder='email'
        name='email'
      />
      <textarea
        ref={messageRef}
        name='message'
        className={style.textarea}
        placeholder='message'
      ></textarea>
      <div className={style.fileInput}>
        <ImageFileInput onUpload={onHandleUpload} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
