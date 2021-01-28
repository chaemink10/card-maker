import React from 'react';
import style from './login.module.css';

const Header = (props) => {
  return (
    <div className={style.header}>
      <img src='/images/logo.png' alt='header' />
      <p className={style.header_txt}>Business Card Maker</p>
    </div>
  );
};

export default Header;
