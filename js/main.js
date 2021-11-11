window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop + window.pageYOffset;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
