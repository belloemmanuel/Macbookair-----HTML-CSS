const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eye = document.getElementById('fa-eye');
const faEyeSlash = document.getElementById('fa-eye-slash');
const btn = document.getElementById('creatAccnt');
const verifybtn = document.getElementById('verifybtn')
const nameMessage = document.getElementById('nameMessage')
const emailMessage = document.getElementById('emailMessage')
const passwordMessage = document.getElementById('passwordMessage')


btn.addEventListener('click', getValue);
eye.addEventListener('click', revealPassword);
faEyeSlash.addEventListener('click', hidePassword);


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

const myPassword = '12345'
const myEmail = 'belloemmanuel02@gmail.com'
const myUsername = 'Bello Emmanuel'

