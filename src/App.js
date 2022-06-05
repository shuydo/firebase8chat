import React, { createContext /*, useContext*/ } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Context } from "./index";
// import { useAuthState } from "react-firebase-hooks/auth";

import firebase from "firebase"; //new
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
// import { useFirebaseApp } from "@use-firebase/app";
import {
  FirebaseAppProvider,
  useFirebaseApp,
  DatabaseProvider,
  AuthProvider,
} from "@use-firebase/app";

import "./App.css";
// import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
// import AppRouter from "./components/AppRouter";

// =========== anoter (----)
const firebaseConfig = {
  apiKey: "AIzaSyDWfNth4h_lckIYAce3efnx6lXmnq73Fps",
  authDomain: "project-8480624176791515999.firebaseapp.com",
  projectId: "project-8480624176791515999",
  storageBucket: "project-8480624176791515999.appspot.com",
  messagingSenderId: "754787260122",
  appId: "1:754787260122:web:10fef02c683691c93477e3",
  /* add your config object from the Firebase console */
};
firebase.initializeApp(firebaseConfig);

//  const Context = createContext(null);
const auth = firebase.auth();
const db = firebase.database(); //new
const app1 = useFirebaseApp(); // new

console.log("app: ", app1);
console.log("auth: ", auth);
console.log("db: ", db);

const firestore = firebase.firestore();
// =======================================
const App = () => {
  // ====================================

  // const { auth } = useContext(Context);
  // const [user, loading, error] = useAuthState(auth);

  // const authShu = firebase.auth(app1);
  // const auth = firebase.auth();

  // console.log("authShu: ", authShu);

  // if (loading) {
  // return <Loader />;
  // }

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Navbar />
        {/* <AppRouter /> */}
      </BrowserRouter>
    </FirebaseAppProvider>
  );
};

export default App;
