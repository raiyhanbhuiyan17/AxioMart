// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3NaOx15W1KCNVCefoBIFE5MSLT3M02uc",
    authDomain: "axiomart-12345.firebaseapp.com",
    projectId: "axiomart-12345",
    storageBucket: "axiomart-12345.appspot.com",
    messagingSenderId: "651449422486",
    appId: "1:651449422486:web:2e0b01dcba24e8ff86e8b7",
    measurementId: "G-EK30FKB0M5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };