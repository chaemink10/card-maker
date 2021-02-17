import firebaseApp from './firebase';
import firebase from 'firebase';

class Database {
  dbconnect() {
    const database = firebaseApp.database();
    return database;
  }

  save(cards) {
    Object.keys(cards).map((key) =>
      firebase
        .database()
        .ref('users/' + cards[key].id)
        .set({
          id: cards[key].id,
          name: cards[key].name,
          company: cards[key].company,
          theme: cards[key].theme,
          title: cards[key].title,
          email: cards[key].email,
          message: cards[key].message,
          filename: cards[key].filename || '',
          fileurl: cards[key].fileurl || '',
        })
        .then(() => '')
        .catch((error) => console.log(error))
    );
  }

  delete(card) {
    firebase
      .database()
      .ref('users/' + card.id)
      .remove()
      .then(function () {
        console.log('Remove succeeded.');
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });
  }

  load() {
    return firebase.database().ref('users/');
  }
}

export default Database;
