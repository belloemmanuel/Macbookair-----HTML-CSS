let email = document.getElementById('email')
let username = document.getElementById('username')
let password= document.getElementById('password')
import values from "./data.js";

username.innerHTML = `Your Username is : ${values.defaultUsername}`;
email.innerHTML = `Your Email is : ${values.defaultEmail}`;
password.innerHTML = `Your Password is : ${values.defaultPassword}`;
