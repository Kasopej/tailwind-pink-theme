import "../assets/style/css/main.css";
import "../assets/style/sass/main.scss";

function transitionImageIntoView() {
  this.classList.add("inview");
}

document.querySelectorAll(".image-copy").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    transitionImageIntoView.call(this);
  });
});