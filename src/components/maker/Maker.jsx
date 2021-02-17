import { memo, React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = memo(({ authService, FileInput, DBService, cardsLoad }) => {
  const [cards, setCards] = useState({});
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

    DBService.load().on('value', (card) => {
      setCards(card.val());
    });
  }, [authService, history, cardsLoad, DBService]);

  //Data Add and Update
  const onHandleAddUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      DBService.save(updated);
      return updated;
    });
  };

  //Data Delete
  const onHandleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      DBService.delete(card);
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
          cards={cards && cards}
          onAdd={onHandleAddUpdate}
          onUpdate={onHandleAddUpdate}
          onDelete={onHandleDelete}
        />
        <Preview cards={cards && cards} />
      </section>
      <Footer />
    </section>
  );
});

export default Maker;
