// Глобальные переменные
const menuButton = document.querySelector('.button--nav');

// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/menu.js");
