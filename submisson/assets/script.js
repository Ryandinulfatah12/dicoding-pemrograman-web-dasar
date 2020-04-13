window.onscroll = function() {
  var el = document.getElementsByClassName('nav')[0];
  var className = 'opacity';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};