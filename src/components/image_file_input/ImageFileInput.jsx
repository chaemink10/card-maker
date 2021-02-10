import React, { useRef } from 'react';
import style from './image_file_input.module.css';

const ImageFileInput = ({ imageService, onUpload, fileName }) => {
  const fileRef = useRef();

  const onChange = (event) => {
    event.preventDefault();

    imageService.upload(fileRef.current.files[0]).then((data) => {
      onUpload({
        name: data.original_filename,
        url: data.url,
      });
    });
  };

  return (
    <div className={style.uploadbtn}>
      <input
        ref={fileRef}
        type='file'
        name='files[]'
        className={style.upload}
        accept='image/*'
        onChange={onChange}
      />
      <span className={style.filename}>{fileName ? fileName : 'No file'}</span>
    </div>
  );
};

export default ImageFileInput;
