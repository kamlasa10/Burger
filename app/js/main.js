$(function () {
  $('.burger-menu-btn').on('click', (e) => {
    e.preventDefault();
    let btnBurger = $('.burger-menu-btn');
    let overlay = $('.overlay')

    btnBurger.toggleClass('burger-menu-btn--active');
    overlay.toggleClass('overlay-show');

    $('.burger-btn-close').on('click', () => {
      let burgerClose = $('.burger-btn-close');
      let burgerOverlay = $('.overlay');

      burgerOverlay.removeClass('overlay-show');
    });
  });
});
$(function () {
  $('.btn-more').on('click', (e) => {
    e.preventDefault();
    let popupOverlay = $('.modal-overlay');
    let popup = $('.modal');
    let btnClose = $('.modal-close');

    popupOverlay.toggleClass('modal-show');
    popup.addClass('modal-show');
  });
  $('.modal-close').on('click', () => {
    let popupOverlay = $('.modal-overlay');
    let popup = $('.modal');
    let btnClose = $('.modal-close');

    popup.removeClass('modal-show');
    popupOverlay.removeClass('modal-show');
  });
});
$(function () {
    $('.accordeon__link').on('click', (e) => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let item = $this.closest('.accordeon__item');
    let accordeonRow = $('.accordeon-row');

    item.toggleClass('accordeon__item--open').siblings().removeClass('accordeon__item--open');
    accordeonRow.outerHeight()
  });
});
$(function () {
  $('.menu-accordeon__link').on('click', (e) => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let item = $this.closest('.menu-accordeon__item');

    item.toggleClass('menu-accordeon__item--open').siblings().removeClass('menu-accordeon__item--open');
  });
});

// plugin slick carousel

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
});
});
// plugin one page scroll


$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First', 'Second', 'Third'],
    scrollingSpeed: 1200,
  });
});









