import { Ui } from "./UI.module.js";

export class Game {
  async addsectionGame(category = "mmorpg") {
    let gameUi = new Ui(category);
    var cards = await gameUi.displayData();
    document.querySelector("title").innerHTML = "Home";
    return cards;
  }
}
