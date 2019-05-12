var navMain = document.querySelector('.main-navigation');
window.addEventListener('DOMContentLoaded', function () {
  navMain.classList.remove('main-navigation__button-menu--nojs');
  navMain.classList.add('main-navigation__button-menu--closed');
});
document.querySelector('.main-navigation__toggle').addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation__button-menu--closed')) {
    navMain.classList.remove('main-navigation__button-menu--closed');
    navMain.classList.add('main-navigation__button-menu--opened');
  } else {
    navMain.classList.add('main-navigation__button-menu--closed');
    navMain.classList.remove('main-navigation__button-menu--opened');
  }
});
document.body.addEventListener('click', function (event) {
  var modal = document.querySelector('.modal');
  var btn = document.querySelector('.product-hit__button');
  var overlay = document.querySelector('.modal__overlay');
  var target = event.target;
  if (target !== modal && !modal.contains(target) || document.querySelector('.form-size__button') === target) {
    modal.style.display = 'none';
    overlay.classList.remove('modal__overlay--show')
  }
  if (target === btn) {
    event.preventDefault();
    modal.style.display = 'block';
    overlay.classList.add('modal__overlay--show')
  }
});
window.addEventListener('resize', function () {
  if (navMain.classList.contains('main-navigation--opened')) {
    navMain.classList.remove('main-navigation--opened');
    navMain.classList.add('main-navigation--closed');
  }
});
