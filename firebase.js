//import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-OenARm8LWWCUA31O7i42ew8-TOldjDU",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "deen-xla",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "noreply@deen-xla.firebaseapp.com",
  appId: "1:805222331896:android:96587297795dbd49ba520d",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

const firestore = firebase.firestore();

export { firebase, firestore };
