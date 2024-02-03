// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

import firebase from "firebase";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMt2kLuCYk0EXyuGf8o4GtsPQhrjTiByQ",
    authDomain: "project-socialmedia-e83b4.firebaseapp.com",
    projectId: "project-socialmedia-e83b4",
    storageBucket: "project-socialmedia-e83b4.appspot.com",
    messagingSenderId: "887951708453",
    appId: "1:887951708453:web:aae2ffabe568ce6a9d8acc",
    measurementId: "G-FFTBBCTELP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;

