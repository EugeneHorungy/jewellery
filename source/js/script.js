'use strict';

const page = document.querySelector('.page-body');
const header = document.querySelector('.header');
const searchForm = document.querySelector('.search-form');
const userMenu = document.querySelector('.user-menu');
const infoList = document.querySelector('.info-list');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-button');
const logo = document.querySelector('.logo');
const mobileCart = document.querySelector('.mobile-cart__icon');
const slider = document.querySelector('.swiper');
const noveltyCards = document.querySelectorAll('.novelty-card');
const noveltiesControls = document.querySelectorAll('.novelties__controls');

if (noveltyCards) {
  noveltyCards.forEach((card) => {
    card.classList.remove('novelty-card--no-js');
  })
}

if (noveltiesControls) {
  noveltiesControls.forEach((btn) => {
    btn.classList.remove('novelties__controls--no-js');
  })
}

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
};

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  switchMenu();
});

// SWIPER

if (slider) {
  const initSwiper = () => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      observer: true,
      observeParents: true,
      resizeReInit: true,
      spaceBetween: 30,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return `<span class= ${currentClass}></span> <span>of</span> <span class= ${totalClass}></span>`;
            },
          },
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: function (index, className) {
              return `<button class="${className}">${index + 1}</button>`;
            },
            clickable: true,
          },
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: function (index, className) {
              return `<button class="${className}">${index + 1}</button>`;
            },
            clickable: true,
          },
        }
      }
    });
  }

  initSwiper();

  window.addEventListener('resize', () => {
    const swiperPagination = document.querySelector('.swiper-pagination');
    if (window.innerWidth < 768 && swiperPagination.firstElementChild.nodeName === 'BUTTON') {
      console.log(`Screen width: ${window.innerWidth}`);
      initSwiper();
    } else if (window.innerWidth > 767 && swiperPagination.firstElementChild.nodeName === 'SPAN') {
      console.log(`Screen width: ${window.innerWidth}`);
      initSwiper();
    }
  });
};
