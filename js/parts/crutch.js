window.onresize = function(event) {
  location.reload ();
};

window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
    document.body.style.zoom = 1.0;
  }
});

if(window.devicePixelRatio < 1) {
  console.log('change!');
}
