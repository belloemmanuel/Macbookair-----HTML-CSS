const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eye = document.getElementById('fa-eye');
const faEyeSlash = document.getElementById('fa-eye-slash');
const createBtn = document.getElementById('creatAccnt');

createBtn.addEventListener('click', getValue);
eye.addEventListener('click', revealPassword);
faEyeSlash.addEventListener('click', hidePassword);

const defaultUsername = 'Bello Emmanuel'
const defaultEmail = 'belloemmanuel02@gmail.com'
const defaultPassword = '12345'

let values = {
  defaultEmail : 'belloemmanuel02@gmail.com',
  defaultPassword : '12345',
  defaultUsername : 'Bello Emmanuel'
}
export default values;

function getValue(){
  if(username.value == ''){
    username.style.border = '1px solid red'
    password.style.border = '1px solid red'
    email.style.border = '1px solid red'
  } else if(username.value !== defaultUsername){
    username.style.border = '1px solid yellow'
    email.style.border = '1px solid red'
  } else{
    username.style.border = '1px solid green'
    password.style.border = '1px solid red'
    email.style.border = '1px solid red'
  } if(email.value == ''){
    email.style.border == '1px solid red'
  } else if(email.value !== defaultEmail){
    email.style.border = '1px solid yellow'
  } else{
    email.style.border = '1px solid green'
  } if(password.value == ''){
    password.style.border == '1px solid red'
  } else if(password.value !== defaultPassword){
    password.style.border = '1px solid yellow'
  } else{
    password.style.border = '1px solid green'
  } if(username.value == defaultUsername && email.value == defaultEmail && password.value == defaultPassword){
    // window.location.href = "login.html"
  }
}

function hidePassword() {
  password.type = 'password';
  eye.style.display = 'block';
  faEyeSlash.style.display = 'none';
}

function revealPassword() {
  password.type = 'text';
  eye.style.display = 'none';
  faEyeSlash.style.display = 'block';
}

