import { Ui } from "./UI.module.js";
export class gameDetails {
  async addSectionDetails(id, category = "mmorpg") {
    let gameDetailsUi = new Ui(category);
    gameDetailsUi.displayDetails(id);
    document.querySelector("title").innerHTML = "Details Game";
  }
}
