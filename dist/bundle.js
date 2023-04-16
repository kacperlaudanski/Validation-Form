/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const firstName = document.getElementById('first-name')\nconst lastName = document.getElementById('last-name')\nconst email = document.getElementById('email')\nconst password = document.getElementById('password')\nconst phoneNumber = document.getElementById('phone-number')\nconst createAccountButton = document.getElementById('create-account-button')\nconst inputGroup = document.querySelector('.input-group')\nconst showPasswordButton = document.getElementById('show-password')\n\nfunction checkValidation(input, condition){\n    const parentElement = input.parentElement\n    const grandParentElement = parentElement.parentElement\n    const errorContent = grandParentElement.children[1]\n    let errorMessage; \n    if(!input.value.match(condition)){\n        input.parentElement.classList.add('error')\n        errorContent.classList.remove('hidden')\n        if(input.id === 'first-name' || input.id === 'last-name'){\n            errorMessage = 'Letters only'\n        }else if(input.id === 'email'){\n            errorMessage = 'Invalid e-mail'\n        }else if(input.id === 'password'){\n            errorMessage = 'Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.' \n        }else if(input.id === 'phone-number'){\n          if(input.value.length < 5){\n            errorMessage = 'Too short number'\n          }\n        }\n          errorContent.textContent = errorMessage; \n        }else{\n        input.parentElement.classList.add('correct')\n        input.parentElement.classList.remove('error')\n        errorContent.classList.add('hidden')\n    }\n    if(input.value.length === 0){\n        input.parentElement.classList.remove('error')\n        input.parentElement.classList.remove('correct')\n        errorContent.classList.add('hidden')\n    }\n}\n\nfunction showPassword(){\n    if(password.value.length === 0) return \n    if(password.type === 'password'){\n        password.type = 'text'\n    }else{\n        password.type = 'password'\n    }\n}\n\nfirstName.addEventListener('input', () => {\n    checkValidation(firstName, /^[A-Za-z]+$/)\n})\nlastName.addEventListener('input', () => {\n    checkValidation(lastName, /^[A-Za-z]+$/)\n})\nemail.addEventListener('input', () => {\n    checkValidation(email, /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)\n})\npassword.addEventListener('input', () => {\n    if(password.value.length > 0){\n        showPasswordButton.classList.remove('hidden') \n    }else{\n        showPasswordButton.classList.add('hidden')\n    }\n    checkValidation(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\w\\s]).{8,}$/); \n})\nphoneNumber.addEventListener('input', () => {\n    checkValidation(phoneNumber, /^(?=.{5,}$)\\d{3}-?\\d{2,4}-?\\d{0,3}$|^$/)\n})\nshowPasswordButton.addEventListener('click', showPassword)\n\n//# sourceURL=webpack://validation-form/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;