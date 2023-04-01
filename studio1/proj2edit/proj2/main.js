 //BASE
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keysA75kB2fYdEVkh" }).base(
  "appvhTzvMMYJYoGDS"
);

let candyType = document.querySelector("main").dataset.candy;

base("sweets")
  .select({
    view: "Grid view",
  })
  .eachPage(function page(candies, fetchNextPage) {
    candies.forEach(function (candy) {
      // only render candy that matches the current page candy type
      if (!candy.fields.Type.includes(candyType)) return;

      let airtableItem = document.createElement("div");
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-price", candy.fields.Price);

      let sweetImg = document.createElement("img");
      sweetImg.src = candy.fields.Imgs[0].url;
      document.querySelector(".sweet-image").appendChild(sweetImg);
      airtableItem.append(sweetImg);

//POP UPS
      let sweetDate = document.createElement("span");
      sweetDate.innerHTML = candy.fields.Date;
      document.querySelector(".pop-up-content").appendChild(sweetDate);

      let popUp = document.createElement("div");
      popUp.classList.add("pop-up");
      airtableItem.appendChild(popUp);

      let popUpTitle = document.createElement("div");
      popUpTitle.classList.add("pop-up-title");
      popUp.appendChild(popUpTitle);

      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUp.appendChild(popUpContent);

      // show pop up when user clicks on sweet image
      sweetImage.addEventListener("click", function (event) {
      popUp.classList.toggle("show");
      event.stopPropagation(); 
      });

      // hide pop up when user clicks outside of pop up box
      document.addEventListener("click", function (event) {
        if (!popUp.contains(event.target)) {
          popUp.classList.remove("show");
        }
      });

    });
  });

//RESET
function resetPage(filter) {
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function (item) {
    item.classList.remove("hidden");
  });

  document.querySelectorAll(".btn-price").forEach((btn) => {
    if (btn.dataset.price != filter) btn.classList.remove("active");
  });
}

document.querySelectorAll(".btn-price").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let clickedPrice = e.target.dataset.price;

    //reset any active filters
    resetPage(e.target.dataset.price);

    //toggle active state on selected filter
    e.target.classList.toggle("active");

    //hide any items that do not match the selected filter
    document.querySelectorAll(".airtable-item").forEach((item) => {
      if (
        (item.dataset.price == clickedPrice &&
          e.target.classList.contains("active")) ||
        !e.target.classList.contains("active")
      ) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
