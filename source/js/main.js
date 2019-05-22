var main_navigation = document.querySelector('.main-navigation');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');
var product_hit__button = document.querySelector('.product-hit__button');
var products__baskets = document.querySelectorAll('.products__basket');
var main_navigation__toggle = document.querySelector('.main-navigation__toggle');

function ShowMainNavigationHandler() {
  if (main_navigation.classList.contains('main-navigation__button-menu--closed')) {
    main_navigation.classList.remove('main-navigation__button-menu--closed');
    main_navigation.classList.add('main-navigation__button-menu--opened');
  } else {
    main_navigation.classList.add('main-navigation__button-menu--closed');
    main_navigation.classList.remove('main-navigation__button-menu--opened');
  }
}

function HideModalHandler() {
  modal.style.display = 'none';
  overlay.classList.remove('modal__overlay--show');
}

function ShowModalHandler(event) {
  event.preventDefault();
  modal.style.display = 'block';
  overlay.classList.add('modal__overlay--show');
}

function AddEventToProductBaskets(products__baskets) {
  for (var i = 0; i < products__baskets.length; i++)
    products__baskets[i].addEventListener('click', ShowModalHandler);
}

function Initialization() {
  if (main_navigation) {
    main_navigation.classList.remove('main-navigation__button-menu--nojs');
    main_navigation.classList.add('main-navigation__button-menu--closed');
  }
  if (product_hit__button) product_hit__button.addEventListener('click', ShowModalHandler);
  if (products__baskets) AddEventToProductBaskets(products__baskets);
  if (main_navigation__toggle) main_navigation__toggle.addEventListener('click', ShowMainNavigationHandler);
  if (overlay) overlay.addEventListener('click', HideModalHandler);
}

Initialization();
