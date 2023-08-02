const menuBtn = document.querySelector('.show_menu');
const mobileMenu = document.querySelector('.menu_wrapper');
const closeMenu = document.querySelector('.close_menu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('menu_wrapper_open');
})

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('menu_wrapper_open');
})