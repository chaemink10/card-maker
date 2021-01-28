import React from 'react';
import style from './login.module.css';

const LoginService = (props) => {
  return (
    <div className={style.loginBody}>
      <h2>Login</h2>
      <button className={style.btn}>Google</button>
      <button className={style.btn}>Github</button>
    </div>
  );
};

export default LoginService;
