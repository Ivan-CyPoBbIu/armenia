let burger = document.querySelector('.burger-btn');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click',
  function() {

    menu.classList.toggle('header__nav--active')
  })
