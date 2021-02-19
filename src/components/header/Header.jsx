import React, { memo } from 'react';
import style from './header.module.css';

const Header = memo(({ onClickLogout }) => {
  return (
    <header className={style.header}>
      <button onClick={onClickLogout} className={style.logout}>
        Logout
      </button>
      <img src='images/logo.png' alt='header' />
      <p className={style.header_txt}>Business Card Maker</p>
    </header>
  );
});

export default Header;
