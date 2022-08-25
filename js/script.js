const HEADER = document.querySelector ('.header');
const BUTTON = document.querySelector ('.header__button');
const LINK_LIST = HEADER.querySelector ('.link-list');

BUTTON.addEventListener('click', function() {
    HEADER.classList.toggle('header__active')
    document.body.classList.toggle('no-scroll')
});

LINK_LIST.addEventListener('click', function() {
    HEADER.classList.remove('header__active')
    document.body.classList.remove('no-scroll')
});