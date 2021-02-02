import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  //Login
  const onHandleLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((result) => {
        goToMaker(result.user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    }, []);
  });

  return (
    <section className={style.loginbox}>
      <Header onLogout={false} />
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
