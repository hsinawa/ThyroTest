import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpwtq1b09Av9j3kgTiXKVx0WCVN5W8aUw",
  authDomain: "infuzexdoctrap.firebaseapp.com",
  projectId: "infuzexdoctrap",
  storageBucket: "infuzexdoctrap.appspot.com",
  messagingSenderId: "568680660818",
  appId: "1:568680660818:web:285f8ca0d51a3197a6848b",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
