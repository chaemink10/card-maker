import React from 'react';
import style from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={style.header}>
      {true && (
        <button onClick={onLogout} className={style.logout}>
          Logout
        </button>
      )}
      <img src='/images/logo.png' alt='header' />
      <p className={style.header_txt}>Business Card Maker</p>
    </header>
  );
};

export default Header;
