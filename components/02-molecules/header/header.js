/* eslint-disable */
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    once('headerBehavior', '.header').forEach(function (header) {
      // console.log(element);
      const body = document.querySelector('body');
      const headerHamburger = header.querySelector('.header__hamburger');
      headerHamburger.addEventListener('click', (event) => {
        header.classList.toggle('show-menu');
        body.classList.toggle('show-menu');
      });
    });
  },
};
