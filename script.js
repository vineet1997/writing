import {registerUser, loginUser} from './auth.js'

document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    registerUser(email, password);
});

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    loginUser(email, password);
});


// function register() {
//     const email = document.getElementById("reg-email").value;
//     const password = document.getElementById("reg-password").value;
//     registerUser(email, password);
// }
//
// function login() {
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;
//     loginUser(email, password);
// }
//
// function logout() {
//     logoutUser();
// }

