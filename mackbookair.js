const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eye = document.getElementById('fa-eye');
const faEyeSlash = document.getElementById('fa-eye-slash');
const btn = document.getElementById('creatAccnt');

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

function getValue() {
  console.log(`Username: ${username.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`);
}
