const email = document.getElementById('email')
const password = document.getElementById('password')
const createAccountBtn = document.getElementById('createaccountbtn')
const emailMessage = document.getElementById('email-message')
const passwordMessage = document.getElementById('password-message')

createAccountBtn.addEventListener('click', getValue)

let myEmail = 'belloemmanuel02@gmail.com'
let myPassword = '12345'

function getValue(){
   if(email.value == ''){
    emailMessage.innerHTML = 'please enter email'
   } else if(email.value !== myEmail){
    emailMessage.innerHTML = 'please enter correct email'
   } else{
    emailMessage.innerHTML = ''
    passwordMessage.innerHTML = 'please enter password'
   }
   if(password.value == ''){
    passwordMessage.innerHTML = 'please enter password'
   } else if(password.value !== myPassword){
    passwordMessage.innerHTML = 'please enter correct password'
   } else{
    passwordMessage.innerHTML = ''
   }
}