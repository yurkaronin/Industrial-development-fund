window.onscroll = function headerFixed() {
    if(window.pageYOffset > 200) {
      document.body.classList.add('js-menu-fixed');
    } else {
      document.body.classList.remove('js-menu-fixed');
    }

}
