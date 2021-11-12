window.onscroll = function () {
  scrollFunction();
  arrowFunction();
};

var navbar = document.querySelector("header");
var backToTop = document.getElementById("toTop");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function arrowFunction() {
  if (window.pageYOffset >= sticky) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}
