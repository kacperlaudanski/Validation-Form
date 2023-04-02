const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const phoneNumber = document.getElementById('phone-number')
const createAccountButton = document.getElementById('create-account-button')
const inputGroup = document.querySelector('.input-group')
const showPasswordButton = document.getElementById('show-password')

function checkValidation(input, condition){
    const parentElement = input.parentElement
    const grandParentElement = parentElement.parentElement
    const errorContent = grandParentElement.children[1]
    let errorMessage; 
    if(!input.value.match(condition)){
        input.parentElement.classList.add('error')
        errorContent.classList.remove('hidden')
        errorContent.textContent = errorMessage; 
        if(input === 'firstName' || input === 'lastName'){
            errorMessage = 'Letters only'
        }else if(input === 'email'){
            errorMessage = 'Invalid e-mail'
        }else if(input === 'password'){
            errorMessage = 'Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.' 
        }else{
            return 
        }
        }else{
        input.parentElement.classList.add('correct')
        input.parentElement.classList.remove('error')
        errorContent.classList.add('hidden')
    }
    if(input.value.length === 0){
        input.parentElement.classList.remove('error')
        input.parentElement.classList.remove('correct')
        errorContent.classList.add('hidden')
    }
}

/*function checkNameValidation(name){
  const letters_only = /^[A-Za-z]+$/
  const parentElement = name.parentElement
  const grandParentElement = parentElement.parentElement
  const errorContent = grandParentElement.children[1]
    if (!name.value.match(letters_only)){
        name.parentElement.classList.add('error')
        errorContent.classList.remove('hidden')
        errorContent.textContent = 'Letters only'
    }else{
        name.parentElement.classList.add('correct')
        name.parentElement.classList.remove('error')
        errorContent.classList.add('hidden')
    }
    if(name.value.length === 0){
        name.parentElement.classList.remove('error')
        name.parentElement.classList.remove('correct')
        errorContent.classList.add('hidden')
    }
}

function checkEmailValidation(){
   const parentElement = email.parentElement
   const grandParentElement = parentElement.parentElement
   const errorContent = grandParentElement.children[1]
   const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
   if(!email.value.match(email_pattern)){
     email.parentElement.classList.add('error')
     errorContent.classList.remove('hidden')
     errorContent.textContent = 'Invalid e-mail'
   }else{
    email.parentElement.classList.remove('error')
    errorContent.classList.add('hidden')
    email.parentElement.classList.add('correct')
   }
   if(email.value.length === 0){
    email.parentElement.classList.remove('error')
    email.parentElement.classList.remove('correct')
    errorContent.classList.add('hidden')
}
}

function checkPasswordValidation(){
   const parentElement = password.parentElement
   const grandParentElement = parentElement.parentElement
   const errorContent = grandParentElement.children[1]
   const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/
   if(!password.value.match(password_pattern)){
    password.parentElement.classList.add('error')
    errorContent.classList.remove('hidden')
    errorContent.textContent = 'Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.'
   }else{
    password.parentElement.classList.remove('error')
    errorContent.classList.add('hidden')
    password.parentElement.classList.add('correct')
   }
   if(password.value.length === 0){
    password.parentElement.classList.remove('error')
    password.parentElement.classList.remove('correct')
    errorContent.classList.add('hidden')
}}

function checkPhoneNumberValidation(){
    const parentElement = phoneNumber.parentElement
    const grandParentElement = parentElement.parentElement
    const errorContent = grandParentElement.children[1]
    const number_pattern = /^\d{3}-?\d{3}-?\d{3}$|^\d{9}$/
    if(!phoneNumber.value.match(number_pattern)){
        phoneNumber.parentElement.classList.add('error')
        errorContent.classList.remove('hidden')
        errorContent.textContent = 'Invalid phone number'
    }else if(phoneNumber.value.length < 9){
        errorContent.classList.remove('hidden')
        errorContent.textContent = 'Too short number'
    }else{
        phoneNumber.parentElement.classList.remove('error')
        errorContent.classList.add('hidden')
        phoneNumber.parentElement.classList.add('correct')
    }
    if(phoneNumber.value.length === 0){
        phoneNumber.parentElement.classList.remove('error')
        phoneNumber.parentElement.classList.remove('correct')
        errorContent.classList.add('hidden')
    }
} */

function showPassword(){
    if(password.value.length === 0) return 
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
}

firstName.addEventListener('input', () => {
    checkValidation(firstName, /^[A-Za-z]+$/)
})
lastName.addEventListener('input', () => {
    checkValidation(lastName, /^[A-Za-z]+$/)
})
email.addEventListener('input', () => {
    checkValidation(email, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
})
password.addEventListener('input', () => {
    if(password.value.length > 0){
        showPasswordButton.classList.remove('hidden') 
    }else{
        showPasswordButton.classList.add('hidden')
    }
    checkPasswordValidation(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/); 
})
//phoneNumber.addEventListener('input', checkPhoneNumberValidation)
showPasswordButton.addEventListener('click', showPassword)