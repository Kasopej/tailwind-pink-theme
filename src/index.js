import "../assets/style/css/main.css";
import "../assets/style/sass/main.scss";

function transitionImageIntoView() {
  this.classList.add("inview");
}

function openMobileMenu() {
  this.classList.toggle("mobile-menu-open");
}

function toggleNavMobileStyle() {
  this.classList.toggle("nav-mobile-style");
}

document.querySelectorAll(".image-copy").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    transitionImageIntoView.call(this);
  });
});

document.querySelector(".hamburger-icon").addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.getElementsByTagName("nav")[0];
  openMobileMenu.call(mobileMenu);
  toggleNavMobileStyle.call(nav);
});