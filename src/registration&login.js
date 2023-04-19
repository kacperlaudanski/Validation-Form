import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const user = document.getElementById("user");
const loginErrorMessage = document.querySelector(".login-error-message");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const registerEmail = document.getElementById("email");
const registerPassword = document.getElementById("register-password");

const firebaseConfig = {
  apiKey: "AIzaSyD1eLl6bG1DBVsy16tfhQmObteVMGNsAn0",
  authDomain: "test-project-cc102.firebaseapp.com",
  projectId: "test-project-cc102",
  storageBucket: "test-project-cc102.appspot.com",
  messagingSenderId: "931261221876",
  appId: "1:931261221876:web:c18a132d376fbb96f847a1",
};

initializeApp(firebaseConfig);
const auth = getAuth();

function register() {
  createUserWithEmailAndPassword(
    auth,
    registerEmail.value,
    registerPassword.value
  )
    .then(() => {
      window.location.href = "register-successful.html";
    })
    .catch(() => {
      window.location.href = "error.html";
    });
}

function logIn() {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((cred) => {
      localStorage.setItem("user", cred.user.email);
      window.location.href = "logged.html?user=" + cred.user.uid;
    })
    .catch((err) => {
      if (loginErrorMessage) {
        loginErrorMessage.textContent = "Invalid email adress or password";
      }
    });
}
if (user) {
  user.textContent = localStorage.getItem("user");
}

function logOut() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    })
    .catch((err) => console.log(err));
}

export {
  register,
  logIn,
  logOut,
  loginEmail,
  loginPassword,
  registerEmail,
  registerPassword,
};
