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
const accordeonSwitchers = document.querySelectorAll('.accordeon-switcher');
const accordeons = document.querySelectorAll('.accordeon');
const filterSwitcher = document.querySelector('.filter__mobile-switcher button');
const filterWrapper = document.querySelector('.filter__form-wrapper');
const btnCloseFilter = document.querySelector('.filter__btn-close');
const promoBlock = document.querySelector('.promo');
const catalogTagline = document.querySelector('.catalog-tagline');
const faqBtns = document.querySelectorAll('.faq__question');
const filterBtns = document.querySelectorAll('.filter__fieldset-btn');
const filter = document.querySelector('.filter__form');
const btnResetFilter = document.querySelector('button[type="reset"]');

if (promoBlock) {
  promoBlock.classList.remove('promo--no-js');
}

if (catalogTagline) {
  catalogTagline.classList.remove('catalog-tagline--no-js');
}

if (noveltyCards) {
  noveltyCards.forEach((card) => {
    card.classList.remove('novelty-card--no-js');
  });
}

if (noveltiesControls) {
  noveltiesControls.forEach((btn) => {
    btn.classList.remove('novelties__controls--no-js');
  });
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
    const swiper = new Swiper('.swiper', {
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
  };

  initSwiper();

  window.addEventListener('resize', () => {
    const swiperPagination = document.querySelector('.swiper-pagination');
    if (window.innerWidth < 768 && swiperPagination.firstElementChild.nodeName === 'BUTTON') {
      initSwiper();
    } else if (window.innerWidth > 767 && swiperPagination.firstElementChild.nodeName === 'SPAN') {
      initSwiper();
    }
  });
}

// Accordeon

if (filterBtns && filterBtns.length > 1) {
  Array.from(filterBtns)[1].classList.remove('accordeon-switcher--active');
  Array.from(filterBtns)[2].classList.remove('accordeon-switcher--active');
}

if (faqBtns && faqBtns.length > 0) {
  Array.from(faqBtns)[1].classList.remove('accordeon-switcher--active');
  Array.from(faqBtns)[2].classList.remove('accordeon-switcher--active');
  Array.from(faqBtns)[3].classList.remove('accordeon-switcher--active');
}

const removeSwitcherActiveClass = () => {
  if (accordeonSwitchers) {
    Array.from(accordeonSwitchers).forEach((item) => {
      item.classList.remove('accordeon-switcher--active');
    });
  }
};

const removeAccordeonActiveClass = () => {
  if (accordeons) {
    Array.from(accordeons).forEach((item) => {
      item.classList.remove('accordeon--active');
    });
  }
};

if (accordeonSwitchers) {
  Array.from(accordeonSwitchers).forEach((item, i) => {
    item.addEventListener('click', () => {
      if (accordeonSwitchers[i].classList.contains('accordeon-switcher--active')) {
        accordeonSwitchers[i].classList.remove('accordeon-switcher--active');
        accordeons[i].classList.remove('accordeon--active');
      } else {
        // removeSwitcherActiveClass();
        // removeAccordeonActiveClass();
        accordeonSwitchers[i].classList.add('accordeon-switcher--active');
        accordeons[i].classList.add('accordeon--active');
      }
    });
  });
}

// FILTER

const catchFocus = (evt) => {
  const focusableElements = filterWrapper.querySelectorAll('input, button');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (evt.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      evt.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      evt.preventDefault();
    }
  }
};

if (filterWrapper) {
  filterWrapper.classList.remove('filter__form-wrapper--no-js');
}

const onFilterEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    hideFilter();
  }
};

const onOverlayFilterClick = (evt) => {
  if (evt.target.classList.contains('filter__form-wrapper')) {
    hideFilter();
  }
};

const showFilter = () => {
  filterWrapper.classList.add('filter__form-wrapper--popup');
  page.classList.add('page-body--menu-open');
  filterWrapper.addEventListener('keydown', catchFocus);
  window.addEventListener('keydown', onFilterEscKeydown);
  window.addEventListener('click', onOverlayFilterClick);
};

function hideFilter() {
  filterWrapper.classList.remove('filter__form-wrapper--popup');
  page.classList.remove('page-body--menu-open');
  filterWrapper.removeEventListener('keydown', catchFocus);
  window.removeEventListener('keydown', onFilterEscKeydown);
  window.removeEventListener('click', onOverlayFilterClick);
}

if (filterSwitcher) {
  filterSwitcher.addEventListener('click', (evt) => {
    console.log('click');
    evt.preventDefault();
    showFilter();
  })
}

if (btnCloseFilter) {
  btnCloseFilter.addEventListener('click', (evt) => {
    evt.stopPropagation();
    hideFilter();
  })
}

if (btnResetFilter) {
  btnResetFilter.addEventListener('click', () => {
    filter.reset();
  });
}
