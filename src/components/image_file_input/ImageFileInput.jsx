import React, { useRef } from 'react';
import style from './image_file_input.module.css';

const ImageFileInput = ({ onUpload, fileName, fileURL }) => {
  const fileRef = useRef();

  const onChange = (event) => {
    event.preventDefault();
    onUpload(fileRef);
  };

  return (
    <div className={style.uploadbtn}>
      <input
        type='file'
        name='files[]'
        ref={fileRef}
        onChange={onChange}
        className={style.upload}
        accept='.png, .jpg, .jpeg, .gif'
      />
      <span className={style.filename}>{fileName ? fileName : 'Upload'}</span>
    </div>
  );
};

export default ImageFileInput;
