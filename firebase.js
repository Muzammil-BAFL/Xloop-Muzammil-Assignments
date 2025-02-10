//import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHHPIlLM9rOEcSOkLXBLfvcut4TbZtvVw",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "muzammil-projects",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "noreply@deen-xla.firebaseapp.com",
  appId: "1:497543519579:android:ad9071220d12d362eb4e7e",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

const firestore = firebase.firestore();

export { firebase, firestore };
