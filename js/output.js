let email = document.getElementById('email')
let username = document.getElementById('username')
let password= document.getElementById('password')
import values from "./data.js";

username.innerHTML = `Your Username is : <strong>${values.defaultUsername}</strong>`;
email.innerHTML = `Your Email is : <strong>${values.defaultEmail}</strong>`;
password.innerHTML = `Your Password is : <strong>${values.defaultPassword}</strong>`;
