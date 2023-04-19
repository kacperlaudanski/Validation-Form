import { checkValidation } from "./checkValidation.js";
import { passwordPreviewHandler, showPassword } from "./passwordHandler.js";
import {
  logIn,
  logOut,
  register,
  loginEmail,
  loginPassword,
  registerEmail,
  registerPassword,
} from "./registration&login.js";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const createAccountButton = document.getElementById("create-account-button");
const showRegisterPasswordButton = document.getElementById(
  "register-show-password"
);
const showLoginPasswordButton = document.getElementById("login-show-password");
const rememberMeCheckbox = document.getElementById("remember-me-input");
const loginButton = document.getElementById("login-btn");
const logoutButton = document.getElementById("logout-button");

let firstNameValidationResult;
let lastNameValidationResult;
let emailValidationResult;
let passwordValidationResult;
let phoneNumberValidationResult;

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
  if (
    loginEmail &&
    loginPassword &&
    rememberMeCheckbox &&
    showLoginPasswordButton
  ) {
    rememberMeCheckbox.addEventListener("change", (event) => {
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("email", loginEmail.value);
        localStorage.setItem("password", loginPassword.value);
        localStorage.setItem("checkbox", event.target.checked);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("checkbox");
      }
    });

    loginEmail.value = localStorage.getItem("email");
    loginPassword.value = localStorage.getItem("password");
    rememberMeCheckbox.checked = localStorage.getItem("checkbox");

    loginPassword.addEventListener("input", () => {
      passwordPreviewHandler(loginPassword, showLoginPasswordButton);
    });

    showLoginPasswordButton.addEventListener("click", () => {
      showPassword(loginPassword);
    });
  }
  if (loginButton) {
    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      logIn();
    });
  }
  if (logoutButton) {
    logoutButton.addEventListener("click", logOut);
  }
});
