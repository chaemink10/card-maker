import firebase from 'firebase';
import firebaseApp from 'firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    return firebaseApp.auth().signInWithRedirect(authProvider);
  }
}

export default AuthService;
