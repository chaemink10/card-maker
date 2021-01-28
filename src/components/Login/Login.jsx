import React from 'react';
import Header from './Header';
import style from './login.module.css';
import LoginService from './LoginService';

const Login = (props) => {
  return (
    <div className={style.login}>
      <Header />
      <LoginService />
      <footer className={style.footer}>Code your dream</footer>
    </div>
  );
};

export default Login;
