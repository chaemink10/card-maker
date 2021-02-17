import { memo, React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = memo(({ authService, FileInput, DBService }) => {
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

    //목록조회
    DBService.load().on('value', (card) => {
      setCards(card.val());
    });
  }, [authService, history, DBService]);

  //Data Add and Update
  const onHandleAddUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      DBService.save(updated); // data 업데이트
      return updated;
    });
  };

  //Data Delete
  const onHandleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      DBService.delete(card); // data 업데이트
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
