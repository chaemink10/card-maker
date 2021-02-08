import { memo, React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = memo(({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Min',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'min@gmail.com',
      message: 'fighting',
      fileName: 'Min',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Chaemin',
      company: 'SSG',
      theme: 'dark',
      title: 'FrontEnd Developer',
      email: 'ssg.chaemin@gmail.com',
      message: 'just 80%',
      fileName: 'chaemin',
      fileURL: null,
    },
    {
      id: '3',
      name: 'MyungWoo',
      company: 'CJ Logistics',
      theme: 'light',
      title: '3PL',
      email: 'smw@gmail.com',
      message: `Let's Play`,
      fileName: 'myungwoo',
      fileURL: 'min.png',
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
  }, [authService, history]);

  //Data Add
  const onHandleAdd = (card) => {
    const updated = [...cards, card];
    setCards(updated);
    console.log(updated);
  };

  //Data Update
  const onHandleUpdate = (card) => {
    const update = cards.map((item) =>
      item.id === card.id ? (item = card) : item
    );
    const updatedCards = [...update];
    setCards(updatedCards);
  };

  //Data Delete
  const onHandleDelete = (deletedItemId) => {
    const deleted = cards.filter((item) => item.id !== deletedItemId);
    setCards(deleted);
  };

  return (
    <section className={style.maker}>
      <Header onLogout={true} onClickLogout={onHandleLogout} />
      <section className={style.container}>
        <Editor
          cards={cards}
          onAdd={onHandleAdd}
          onUpdate={onHandleUpdate}
          onDelete={onHandleDelete}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
});

export default Maker;
