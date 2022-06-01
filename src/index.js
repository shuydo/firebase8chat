import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDSfTPV8JkjUIY6FYK9SMc_O-iI8h1o9hw",
  authDomain: "chat-react-810f5.firebaseapp.com",
  projectId: "chat-react-810f5",
  storageBucket: "chat-react-810f5.appspot.com",
  messagingSenderId: "1033626114142",
  appId: "1:1033626114142:web:3430c38d49a29798d57ccf",
  measurementId: "G-SWE72J3VQK",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
