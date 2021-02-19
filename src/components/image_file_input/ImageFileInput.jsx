import React, { memo, useRef, useState } from 'react';
import style from './image_file_input.module.css';

const ImageFileInput = memo(({ imageService, onUpload, fileName }) => {
  const fileRef = useRef();
  const [loading, setLoding] = useState(false);

  const onChange = async (event) => {
    setLoding(true);
    const uploaded = await imageService.upload(fileRef.current.files[0]);
    setLoding(false);
    onUpload({
      name: uploaded.original_filename,
      url: uploaded.url,
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
      {!loading && (
        <span
          className={`${style.filename} ${fileName ? style.pink : style.grey}`}
        >
          {fileName ? fileName : 'No file'}
        </span>
      )}
      {loading && <div className={style.loading}></div>}
    </div>
  );
});

export default ImageFileInput;
