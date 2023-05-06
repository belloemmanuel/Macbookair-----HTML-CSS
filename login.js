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
    emailMessage.innerHTML = 'Please Enter Email'
   } else if(email.value !== myEmail){
    emailMessage.innerHTML = 'Please Enter Correct Email'
   } else{
    emailMessage.innerHTML = ''
    passwordMessage.innerHTML = 'Please Enter Password'
   }
   if(password.value == ''){
    passwordMessage.innerHTML = 'Please Enter Password'
   } else if(password.value !== myPassword){
    passwordMessage.innerHTML = 'Please Enter Correct Password'
   } else{
    passwordMessage.innerHTML = ''
   } if(email.value == myEmail && password.value == myPassword){
      alert('Welcome, Click to continue');
      window.location.href = "index.html"
   }
}

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

password.addEventListener('keyup', checkRegularExp)

function checkRegularExp(){
if(!password.value.match(strongRegex)){
console.log('RegExp Error')
passwordMessage.innerHTML = 'Looks Too Simple'
passwordMessage.style.color = 'red'
}else{
   console.log('passed')
   passwordMessage.innerHTML = 'This is Perfect'
passwordMessage.style.color = 'green'
}
}

