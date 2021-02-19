import { memo, React, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = memo(({ authService, FileInput, DBService }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  //Logout
  const onHandleLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  useEffect(() => {
    //로그인이 되어있을때만 데이터 조회
    if (!userId) {
      return;
    }

    const stopLoad = DBService.load(userId, (cards) => {
      setCards(cards);
    });

    return () => stopLoad(); //정리함수! Unmount될때 실행됨. useEffect return에는 항상 function을 리턴해주어야 한다.
  }, [userId, DBService]);

  //Data Add and Update
  const onHandleAddUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    DBService.save(userId, card); // data 업데이트
  };

  //Data Delete
  const onHandleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    DBService.delete(userId, card); // data 업데이트
  };

  return (
    <section className={style.maker}>
      <Header onClickLogout={onHandleLogout} />
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
