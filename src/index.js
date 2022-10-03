import "../assets/style/css/main.css";
import "../assets/style/sass/main.scss";

function transitionImageIntoView() {
  this.classList.add("inview");
}

function openMobileMenu() {
  this.classList.toggle("mobile-menu-open");
}

function toggleNavDropdownStyle() {
  this.classList.toggle("nav-dropdown-style");
}

// Eventlistener for triggering transition
document.querySelectorAll(".image-copy").forEach((el) => {
  el.addEventListener(
    "mouseenter",
    function () {
      transitionImageIntoView.call(this);
    },
    { once: true }
  );
});

document.querySelector(".hamburger-icon").addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.getElementsByTagName("nav")[0];
  openMobileMenu.call(mobileMenu);
  toggleNavDropdownStyle.call(nav);
});