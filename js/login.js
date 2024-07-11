'use strict';

const email = document.querySelector('.login .details input[type="email"]');
const password = document.querySelector(
  '.login .details input[type="password"]'
);
const submit = document.querySelector('.login .details input[type="submit"]');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  const storedUsername = localStorage.getItem('username');

  if (emailValue === storedEmail && passwordValue === storedPassword) {
    setTimeout(() => {
      alert(`Hello ${storedUsername}! Login successful.`);
      window.location.replace('./index.html');
    }, 2000);
  } else {
    alert('Invalid email or password');
  }
});
