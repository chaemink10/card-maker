import { firebaseDatabase } from './firebase';

class Database {
  //추가, 수정
  save(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  //삭제
  delete(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }

  //목록 조회
  load(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const cards = snapshot.val();
      cards && onUpdate(cards);
    });
    return () => ref.off(); //더이상 firebase에서 'on'하지 않는 함수 리턴
  }
}

export default Database;
