// common.js

'use strict';

const backToTop = document.querySelector('.back_top');
const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.links ul');
const overlay = document.querySelector('.overlay');

// Open & close menu
const showMenu = function () {
  menu.style.cssText = 'left:0px;';
  overlay.style.cssText = 'display:block;';
};

const hideMenu = function () {
  menu.style.cssText = 'left:-450px;';
  overlay.style.cssText = 'display:none;';
};

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

// Back to top
backToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
