'use strict';

const userName = document.querySelector(
  '.register .details input[type="text"]'
);
const email = document.querySelector('.register .details input[type="email"]');
const password = document.querySelector(
  '.register .details input[type="password"]'
);
const submit = document.querySelector(
  '.register .details input[type="submit"]'
);
console.log(userName, email, password, submit);
submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (!userName.value || !password.value || !email.value) {
    let missField = '';
    if (!userName.value) missField = 'Name';
    else if (!password.value) missField = 'Password';
    else if (!email.value) missField = 'Email';
    alert(`Please enter your ${missField}`);
  } else {
    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('username', userName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Registration successful!');
    window.location.replace('../login.html');
  }
});
