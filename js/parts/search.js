
for (let searchButtonItem of searchButton) {
  searchButtonItem.onclick = function () {
    if (document.body.classList.contains('js-search-active')) {
      document.body.classList.remove('js-search-active');
    } else {
      document.body.classList.add('js-search-active');
    }
  }
}

searchCloseButton.onclick = function () {
  if (document.body.classList.contains('js-search-active')) {
    document.body.classList.remove('js-search-active');
  }
}

window.addEventListener('scroll', function() {
  if (document.body.classList.contains('js-search-active')) {
    document.body.classList.remove('js-search-active');
  }
});
