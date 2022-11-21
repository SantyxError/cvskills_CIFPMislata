var menuUL = document.getElementsByClassName("menu");
var btnToggle = document.getElementsByClassName("btn-toggle");

btnToggle[0].addEventListener("click", function () {
  if (menuUL[0].style.height) {
    menuUL[0].style.height = null;
  } else {
    menuUL[0].style.setProperty("height", "calc(100vh - 60.79px)");
  }
});

// var cards = document.querySelectorAll(".card");
document.getElementById("valencia").onclick = function () {
  let localizacion = window.location.pathname;
  (localizacion == "/") ? location.href = "index_vlc.html" : (localizacion.includes("_vlc.html")) ? "" : location.href = window.location.pathname.substring(0, window.location.pathname.length - 5) + "_vlc.html";
};

document.getElementById("spain").onclick = function () {
  let localizacion = window.location.pathname;
  (localizacion.includes("_vlc.html")) ? location.href = window.location.pathname.substring(0, window.location.pathname.length - 9) + ".html" : "";
};


// [...cards].forEach((card) => {
//   card.addEventListener("click", function () {
//     card.classList.toggle("is-flipped");
//   });
// });

