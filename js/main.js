// Глобальные переменные
const menuButton = document.querySelector('.js-btn-menu');
const searchButton = document.querySelector('.js-btn-search');
const searchCloseButton = document.querySelector('.js-search-close');

// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/menu.js");
include("./js/parts/search.js");
