'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

const page = document.querySelector('.page-body');
const header = document.querySelector('.header');
const searchForm = document.querySelector('.search-form');
const userMenu = document.querySelector('.user-menu');
const infoList = document.querySelector('.info-list');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-button');
const logo = document.querySelector('.logo');
const mobileCart = document.querySelector('.mobile-cart__icon');

header.classList.remove('header--no-js');
logo.classList.remove('logo--no-js');
mobileCart.classList.remove('mobile-cart__icon--no-js');
searchForm.classList.add('search-form--js');
userMenu.classList.add('user-menu--js');
menu.classList.add('menu--js');
infoList.classList.add('info-list--js');

const switchMenu = () => {
  header.classList.toggle('header--open-menu');
  searchForm.classList.toggle('search-form--js');
  userMenu.classList.toggle('user-menu--js');
  menu.classList.toggle('menu--js');
  logo.classList.toggle('logo--menu-open');
  page.classList.toggle('page-body--menu-open');
  infoList.classList.toggle('info-list--js');
  // navButton.classList.toggle('nav__button--closed');
  // navButton.classList.toggle('nav__button--opened');
  // nav.classList.toggle('nav--menu-open');
  // page.classList.toggle('page-body--menu-open');
};

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  switchMenu();
});

console.log('hello');
