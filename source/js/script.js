let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__nav-toggle');
let addressMapContainer = document.querySelector('.section-address__map-container');

navMain.classList.remove('main-nav--no-js');
navToggle.classList.remove('main-header__nav-toggle--no-js');
addressMapContainer.classList.remove('section-address__map-container--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-header__nav-toggle--closed');
    navToggle.classList.add('main-header__nav-toggle--opened');
} else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-header__nav-toggle--closed');
    navToggle.classList.remove('main-header__nav-toggle--opened');
}
});
