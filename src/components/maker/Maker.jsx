import { React, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Maker = ({ authService }) => {
  const history = useHistory();

  //Logout
  const onHandleLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={style.contentbox}>
      <Header onLogout={true} onClickLogout={onHandleLogout} />
      <section className={style.contentbody}>Hello</section>
      <Footer />
    </section>
  );
};

export default Maker;
