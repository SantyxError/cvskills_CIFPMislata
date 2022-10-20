var menuUL = document.getElementsByClassName("menu");
var btnToggle = document.getElementsByClassName("btn-toggle");

btnToggle[0].addEventListener("click", function () {
  if (menuUL[0].style.height) {
    menuUL[0].style.height = null;
  } else {
    menuUL[0].style.setProperty("height", "40vh");
  }
});

var cards = document.querySelectorAll(".card");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});