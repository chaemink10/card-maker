import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Maker = () => {
  const history = useHistory();

  //Logout
  const onHandleLogout = () => {
    history.push('/');
  };

  return (
    <section className={style.contentbox}>
      <Header onLogout={true} onClickLogout={onHandleLogout} />
      <section className={style.contentbody}>Hello</section>
      <Footer />
    </section>
  );
};

export default Maker;
