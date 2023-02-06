'use strict';

console.log('hy there');

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

const logoMob = document.querySelector('.logo-mobile');
const logoDesk = document.querySelector('.logo-desktop');

// const hideMenu = function (x) {
//   if (x.matches) {
//     console.log(x);
//     logoDesk.classList.add('hidden');
//     logoMob.classList.remove('hidden')
//   } else {
//     logoDesk.classList.remove('hidden');
//     logoMob.classList.add('hidden');
//   }
// }

// hideMenu(x)

addEventListener('resize', (e) => {
  const width = e.target.innerWidth;
  if (width <= 760) {
    logoDesk.classList.add('hidden');
    logoMob.classList.remove('hidden');
    // console.log(width);
  } else {
    logoDesk.classList.remove('hidden');
    logoMob.classList.add('hidden');
  }
});
