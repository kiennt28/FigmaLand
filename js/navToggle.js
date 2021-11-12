const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);
function navToggle() {
  console.log(1);
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav-mobile");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}
