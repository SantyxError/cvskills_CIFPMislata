var menuUL = document.getElementsByClassName("menu");
var btnToggle = document.getElementsByClassName("btn-toggle");

btnToggle[0].addEventListener("click", function () {
  if (menuUL[0].style.height) {
    menuUL[0].style.height = null;
  } else {
    menuUL[0].style.setProperty("height", "100vh");
  }
});

var cards = document.querySelectorAll(".card");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});

var desplazamiento = document.getElementById("posicionamiento");
desplazamiento[0].addEventListener("click",function(){
  let posicion = document.querySelector(".section-terciary").getBoundingClientRect().top;
  window.scrollTo(0,posicion);
  transition = "3s";
})