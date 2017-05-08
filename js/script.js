var button = document.querySelector(".page-button");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var leaving = popup.querySelector("[name=leaving]");
var adults = popup.querySelector("[name=adults]");
var childs = popup.querySelector("[name=childs]");

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (popup.classList.toggle("search-form-close")) {
    popup.classList.add("search-form-animation");
  }
  arrival.focus();
  popup.classList.remove("search-form-error");
});

form.addEventListener("submit", function (event) {
  if (!arrival.value || !leaving.value || !adults.value || !childs.value) {
    event.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("search-form")) {
      popup.classList.toggle("search-form-close");
      popup.classList.remove("search-form-error");
    }
  }
});