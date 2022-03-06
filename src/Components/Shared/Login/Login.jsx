import React, { useContext, useState } from "react";
import "./Login.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebase.config";
import { UserContext } from "./../../../App";

firebase.initializeApp(firebaseConfig);
export default function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log("google");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        setLoggedInUser(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
        // ...
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src="assets/login.png" alt="" />
        </div>
        <div className="right">
          <h1>Login</h1>
          <br />
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="password" name="" id="" placeholder="Your Password" />
            <button>Login</button>
          </form>
          <br /> <span className="or">or</span>
          <br />
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a onClick={handleGoogleSignIn} href="#">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
