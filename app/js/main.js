var overlay = document.querySelector('.overlay');
var burgerBtn = document.querySelector('.burger-menu-btn');
var burgerBtnClose = document.querySelector('.burger-menu-btn--active');

burgerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.toggle('overlay-show');
  burgerBtn.classList.toggle('burger-menu-btn--active');
});

