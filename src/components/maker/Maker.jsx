import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      name: 'Min',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'min@gmail.com',
      message: 'fighting',
    },
  ]);

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

    setCards([
      {
        name: 'Chaemin',
        company: 'SSG',
        theme: 'dark',
        title: 'FrontEnd Developer',
        email: 'ssg.chaemin@gmail.com',
        message: 'just 80%',
      },
      {
        name: 'MyungWoo',
        company: 'CJ Logistics',
        theme: 'light',
        title: '3PL',
        email: 'smw@gmail.com',
        message: `Let's Play`,
      },
    ]);
  }, [authService, history]);

  return (
    <section className={style.maker}>
      <Header onLogout={true} onClickLogout={onHandleLogout} />
      <section className={style.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
