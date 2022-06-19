window.onresize = function(event) {
  console.log('WOW!');
  location.reload ();
};

window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
    document.body.style.zoom = 1.0;
  }
});
