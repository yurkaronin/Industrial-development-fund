window.onscroll = function headerFixed() {
  if(document.documentElement.clientWidth > 1200) {
    if(window.pageYOffset > 200) {
      document.body.classList.add('js-desctop-menu-fixed');
    } else {
      document.body.classList.remove('js-desctop-menu-fixed');
    }
  }

}
