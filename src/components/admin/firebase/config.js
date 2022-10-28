// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJP6jGDOrcG2kAtVuEKnNx9bB47qGl7L8",
  authDomain: "hyab-15046.firebaseapp.com",
  projectId: "hyab-15046",
  storageBucket: "hyab-15046.appspot.com",
  messagingSenderId: "683298257119",
  appId: "1:683298257119:web:aca15e1a26683d98e0116a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
