import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  getFirestore,
  addDoc,
  getDoc,
} from "firebase/firestore";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const registerEmail = document.getElementById("email");
const registerPassword = document.getElementById("register-password");
const phoneNumber = document.getElementById("phone-number");
const createAccountForm = document.getElementById("create-account-form");
const createAccountButton = document.getElementById("create-account-button");
const showRegisterPasswordButton = document.getElementById(
  "register-show-password"
);

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const showLoginPasswordButton = document.getElementById("login-show-password");
const rememberMeCheckbox = document.getElementById("remember-me-input");

const firebaseConfig = {
  apiKey: "AIzaSyD1eLl6bG1DBVsy16tfhQmObteVMGNsAn0",
  authDomain: "test-project-cc102.firebaseapp.com",
  projectId: "test-project-cc102",
  storageBucket: "test-project-cc102.appspot.com",
  messagingSenderId: "931261221876",
  appId: "1:931261221876:web:c18a132d376fbb96f847a1",
};
let firstNameValidationResult;
let lastNameValidationResult;
let emailValidationResult;
let passwordValidationResult;
let phoneNumberValidationResult;

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "users");

function register() {
  addDoc(colRef, {
    email: registerEmail.value,
    firstname: firstName.value,
    lastname: lastName.value,
    password: registerPassword.value,
    phonenumber: phoneNumber.value,
  })
    .then(() => {
      createAccountForm.reset();
    })
    .catch((err) => console.log(err));
}

function checkValidation(input, condition) {
  const parentElement = input.parentElement;
  const grandParentElement = parentElement.parentElement;
  const errorContent = grandParentElement.children[1];
  let errorMessage;
  let validationResult = false;
  if (!input.value.match(condition)) {
    input.parentElement.classList.add("error");
    errorContent.classList.remove("hidden");
    if (input.id === "first-name" || input.id === "last-name") {
      errorMessage = "Letters only";
    } else if (input.id === "email") {
      errorMessage = "Invalid e-mail";
    } else if (input.id === "register-password") {
      errorMessage =
        "Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.";
    } else if (input.id === "phone-number") {
      if (input.value.length < 5) {
        errorMessage = "Too short number";
      }
    }
    errorContent.textContent = errorMessage;
    validationResult = false;
  } else {
    input.parentElement.classList.add("correct");
    input.parentElement.classList.remove("error");
    errorContent.classList.add("hidden");
    validationResult = true;
  }
  if (input.value.length === 0) {
    input.parentElement.classList.remove("error");
    input.parentElement.classList.remove("correct");
    errorContent.classList.add("hidden");
    validationResult = false;
  }
  return validationResult;
}

  rememberMeCheckbox.addEventListener('change', (event) => {
    if(rememberMeCheckbox.checked){
      localStorage.setItem('email', loginEmail.value)
      localStorage.setItem('password', loginPassword.value)
      localStorage.setItem('checkbox', event.target.checked)
    }else{
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('checkbox')
    }
  })
  loginEmail.value = localStorage.getItem('email')
  loginPassword.value = localStorage.getItem('password')
  rememberMeCheckbox.checked = localStorage.getItem('checkbox')

function showPassword(password) {
  if (password.value.length === 0) return;
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function passwordPreviewHandler(password, button) {
  if (password.value.length > 0) {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }
}

function undisabledButton() {
  if (
    firstNameValidationResult &&
    lastNameValidationResult &&
    emailValidationResult &&
    passwordValidationResult &&
    phoneNumberValidationResult
  ) {
    createAccountButton.removeAttribute("disabled");
  } else {
    createAccountButton.setAttribute("disabled", "");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  if (firstName) {
    firstName.addEventListener("input", () => {
      checkValidation(firstName, /^[A-Za-z]+$/)
        ? (firstNameValidationResult = true)
        : (firstNameValidationResult = false);
      undisabledButton();
    });
    if (lastName) {
      lastName.addEventListener("input", () => {
        checkValidation(lastName, /^[A-Za-z]+$/)
          ? (lastNameValidationResult = true)
          : (lastNameValidationResult = false);
        undisabledButton();
      });
    }
    if (registerEmail) {
      registerEmail.addEventListener("input", () => {
        checkValidation(email, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
          ? (emailValidationResult = true)
          : (emailValidationResult = false);
        undisabledButton();
      });
    }
    if (registerPassword) {
      registerPassword.addEventListener("input", () => {
        passwordPreviewHandler(registerPassword, showRegisterPasswordButton);
        checkValidation(
          registerPassword,
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/
        )
          ? (passwordValidationResult = true)
          : (passwordValidationResult = false);
        undisabledButton();
      });
    }
    if (phoneNumber) {
      phoneNumber.addEventListener("input", () => {
        checkValidation(phoneNumber, /^(?=.{5,}$)\d{3}-?\d{2,4}-?\d{0,3}$|^$/)
          ? (phoneNumberValidationResult = true)
          : (phoneNumberValidationResult = false);
        undisabledButton();
      });
      showRegisterPasswordButton.addEventListener("click", () => {
        showPassword(registerPassword);
      });
    }
    if (createAccountButton) {
      createAccountButton.addEventListener("click", (event) => {
        event.preventDefault();
        register();
      });
    }
  }
});

loginPassword.addEventListener('input', () => {
  passwordPreviewHandler(loginPassword, showLoginPasswordButton)
})
showLoginPasswordButton.addEventListener('click', () => {
  showPassword(loginPassword)
})