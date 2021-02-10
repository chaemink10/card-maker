import { memo, React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = memo(({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Min',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'min@gmail.com',
      message: 'fighting',
      fileName: '',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Chaemin',
      company: 'SSG',
      theme: 'dark',
      title: 'FrontEnd Developer',
      email: 'ssg.chaemin@gmail.com',
      message: 'just 80%',
      fileName: '',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'MyungWoo',
      company: 'CJ Logistics',
      theme: 'light',
      title: '3PL',
      email: 'smw@gmail.com',
      message: `Let's Play`,
      fileName: '',
      fileURL: null,
    },
  });

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
  }, [authService, history]);

  //Data Add and Update
  const onHandleAddUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  //Data Delete
  const onHandleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={style.maker}>
      <Header onLogout={true} onClickLogout={onHandleLogout} />
      <section className={style.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={onHandleAddUpdate}
          onUpdate={onHandleAddUpdate}
          onDelete={onHandleDelete}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
});

export default Maker;
