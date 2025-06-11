import { Game } from "./games.module.js";
import { gameDetails } from "./games-details.module.js";

let game = new Game();
/**get Cards element that are displayed default */
let cards = await game.addsectionGame();
getCard();
/***** */
/**use class of details game  */
let details = new gameDetails();
/**** */

let links = document.querySelectorAll(".nav-link");
/**change games displayed when click to specific card and return new cards element */
links.forEach((e,index) => {
  e.addEventListener("click", async function () {
    cards = await game.addsectionGame(e.textContent.trim());
    deleteActive(index);
    getCard();
  });
});
/**get cards function */
function getCard() {
  cards.forEach((e) => {
    e.addEventListener("click", function () {
      details.addSectionDetails(e.getAttribute("index"));
    });
  });
}
/*** */
/** when click close go to section home */
document.querySelector(".btn-close").addEventListener("click", function () {
  document.querySelector("header").classList.remove("d-none");
  document.querySelector("nav").classList.remove("d-none");
  document.querySelector(".game").classList.remove("d-none");
  document.querySelector(".gameDetails").classList.add("d-none");
  document.querySelector("title").innerHTML = "Home";
});

/***active nav */
function deleteActive(index) {
  for (let i = 0; i < links.length; i++) {
    if (i == index) {
      links[i].classList.add("active");
    } else {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }
  }
}
/***** */
