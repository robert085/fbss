'use strict';

// console.log('hy there');

const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-link');
// console.log(menu, menuLinks);


menu.addEventListener('click', function (e) {
  e.preventDefault();
    // console.log(e.target);
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
