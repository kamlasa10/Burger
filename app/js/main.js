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
$(function () {
  $('.menu-accordeon__link').on('click', () => {
    let modalAcco = $('.modal-accordeon');
    modalAcco.toggleClass('modal-show');
  });
  $('.burger-btn-close--modal-acco').on('click', () => {
    let modalAcco = $('.modal-accordeon');
    modalAcco.removeClass('modal-show');
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

//map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(59.896008, 30.424342),
    mapTypeId: 'roadmap'
  });

  var icons = {
    logo: {
      icon: {
        url: '../img/map-marker.svg',
        size: new google.maps.Size(50, 60),
        scaledsize: new google.maps.Size(50, 60)
      }
    }
  };
  var features = [
    {
      position: new google.maps.LatLng(59.897917, 30.420501),
      type: 'logo'
    },
    {
      position: new google.maps.LatLng(59.894742, 30.436731),
      type: 'logo'
    },
    {
      position: new google.maps.LatLng(59.893142, 30.419803),
      type: 'logo'
    },
    {
      position: new google.maps.LatLng(59.888228, 30.421493),
      type: 'logo'
    }
  ];
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}








