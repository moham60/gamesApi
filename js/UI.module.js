export class Ui {
  constructor(category) {
    this.category = category;
  }
  async getData() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "76f45e6267msh2473636d0a029cep1dc41cjsn0a7837d01410",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    document.querySelector(".animation").classList.remove("d-none");

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async displayData() {
    const result = await this.getData();
    document.querySelector(".animation").classList.remove("d-none");
    document.querySelector(".games").innerHTML = "";
    result.forEach((e) => {
      document.querySelector(".games").innerHTML += `<div class="Card  p-2">
            <div class="card  p-3 h-100" index=${e.id}>
              <img
                class="d-block card-img-top img-fluid rounded"
                src="${e.thumbnail}"
                alt=""
              />
              
              <div class="title d-flex mt-2  align-items-center justify-content-between">
                <span class="text-white">${e.title}</span>
                <span class="badge bg-primary">Free</span>
              </div>
              <div class="info mt-3    text-center">
                <p>${e.short_description.slice(0, 36)}</p>
              </div>
              <div class="footer border-top  d-flex text-white align-items-center justify-content-between py-2">
                <span
                  class="rounded-1 ms-2"
                  style="background-color: #32383e">
                  ${e.genre}
                </span>
                <span
                  class="rounded-1 me-2 px-2 py-1"
                  style="background-color: #32383e">
                  ${e.platform}
                </span>
              </div>
            </div>
          </div>`;
      document.querySelector(".animation").classList.add("d-none");
    });
    return document.querySelectorAll(".card");
  }
  async displayDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "76f45e6267msh2473636d0a029cep1dc41cjsn0a7837d01410",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    document.querySelector(".animation").classList.remove("d-none");
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      document.querySelector(".details").innerHTML = `
        <div class="col-md-4    col-sm-12">
           <img class='w-100'  src="${result.thumbnail}" alt="" />
         </div>
         <div class="col-md-8   col-sm-12">
           <p>Title:${result.platform}</p>
           <p>
             Category:
             <span
               class="badge bg-info p-1 text-black"
               style="font-size: 12px"
               >${result.genre}</span
             >
           </p>
           <p>
             Platform:
             <span
               class="badge bg-info p-1 text-black"
               style="font-size: 12px"
               >${result.platform}</span
             >
           </p>
           <p>
             Status:
             <span
               class="badge bg-info p-1 text-black"
               style="font-size: 12px"
               >${result.status}</span
             >
           </p>
           <p>
            ${result.description}
           </p>
           <a href="${result.game_url}" target='_blank' class="btn btn-outline-warning text-white"
             >Show Games</a
           >
         </div>
      `;
      document.querySelector(".animation").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
    document.querySelector("header").classList.add("d-none");
    document.querySelector("nav").classList.add("d-none");
    document.querySelector(".game").classList.add("d-none");
    document.querySelector(".gameDetails").classList.remove("d-none");
  }
}
