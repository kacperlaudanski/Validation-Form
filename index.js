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
        if(input.id === 'first-name' || input.id === 'last-name'){
            errorMessage = 'Letters only'
        }else if(input.id === 'email'){
            errorMessage = 'Invalid e-mail'
        }else if(input.id === 'password'){
            errorMessage = 'Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.' 
        }else if(input.id === 'phone-number'){
          if(input.value.length < 5){
            errorMessage = 'Too short number'
          }
        }
          errorContent.textContent = errorMessage; 
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
    checkValidation(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/); 
})
phoneNumber.addEventListener('input', () => {
    checkValidation(phoneNumber, /^(?=.{5,}$)\d{3}-?\d{2,4}-?\d{0,3}$|^$/)
})
showPasswordButton.addEventListener('click', showPassword)