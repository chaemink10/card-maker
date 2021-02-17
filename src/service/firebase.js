import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_CLODINARY_DB_URL,
  storageBucket: process.env.REACT_APP_CLODINARY_BUCKET,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
