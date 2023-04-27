const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eye = document.getElementById('fa-eye');
const faEyeSlash = document.getElementById('fa-eye-slash');
const btn = document.getElementById('creatAccnt');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// btn.addEventListener('click', getValue);
// eye.addEventListener('click', revealPassword);
// faEyeSlash.addEventListener('click', hidePassword);

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
  if (username.value === '') {
    nameError.textContent = 'Please enter your name';
  } else {
    console.log(`Username: ${username.value}`);
  }
  if (email.value === '') {
    emailError.textContent = 'Please enter your email';
  } else {
    console.log(`Email: ${email.value}`);
  }
  if (password.value === '') {
    passwordError.textContent = 'Please enter your password';
  } else {
    console.log(`Password: ${password.value}`);
  }
}
