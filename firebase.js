import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDBA-PPqtjVtGRIEtsKU1NSIRacLVULgt0",
  authDomain: "imageuplaod-7cdac.firebaseapp.com",
  projectId: "imageuplaod-7cdac",
  storageBucket: "imageuplaod-7cdac.appspot.com",
  messagingSenderId: "290684899588",
  appId: "1:290684899588:web:0e4800f5c9129a52454051"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);

export {app, firebase}