import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './login.module.css';

const Login = ({ authService }) => {
  const onHandleLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  };

  return (
    <section className={style.login}>
      <Header />
      <section className={style.loginBody}>
        <h2>Login</h2>
        <ul>
          <li>
            <button className={style.btn} onClick={onHandleLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={style.btn} onClick={onHandleLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
