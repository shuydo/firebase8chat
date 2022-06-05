import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// // ============== Work ( 1st )
// firebase.initializeApp({
//   apiKey: "AIzaSyDSfTPV8JkjUIY6FYK9SMc_O-iI8h1o9hw",
//   authDomain: "chat-react-810f5.firebaseapp.com",
//   projectId: "chat-react-810f5",
//   storageBucket: "chat-react-810f5.appspot.com",
//   messagingSenderId: "1033626114142",
//   appId: "1:1033626114142:web:3430c38d49a29798d57ccf",
//   measurementId: "G-SWE72J3VQK",
// });

// =========== anoter (----)
const firebaseConfig = {
  apiKey: "AIzaSyDWfNth4h_lckIYAce3efnx6lXmnq73Fps",
  authDomain: "project-8480624176791515999.firebaseapp.com",
  projectId: "project-8480624176791515999",
  storageBucket: "project-8480624176791515999.appspot.com",
  messagingSenderId: "754787260122",
  appId: "1:754787260122:web:10fef02c683691c93477e3",
};
firebase.initializeApp(firebaseConfig);

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
