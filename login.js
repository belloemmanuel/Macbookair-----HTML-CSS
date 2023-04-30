const email = document.getElementById('email')
const password = document.getElementById('password')
const createAccountBtn = document.getElementById('createaccountbtn')
const emailMessage = document.getElementById('email-message')
const passwordMessage = document.getElementById('password-message')

createAccountBtn.addEventListener('click', getValue)

function getValue(){
if(email.value != String('belloemmanuel02@gmail.com' || email.value == '')){
emailMessage.innerHTML = "please enter correct email"
emailMessage.style.color = 'red'
} else{
    emailMessage.innerHTML = " "
    passwordMessage.innerHTML = 'please password'
} 
