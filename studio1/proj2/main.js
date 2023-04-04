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

      let airtableItem = document.createElement("button");
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-price", candy.fields.Price);

      let sweetImg = document.createElement("img");
      sweetImg.src = candy.fields.Imgs[0].url;
      document.querySelector(".sweet-image").appendChild(sweetImg);

      airtableItem.append(sweetImg);

      document.querySelector(".sweet-image").appendChild(airtableItem);

      let popupContainer = document.createElement("div");
      popupContainer.classList.add('popup-container')
      airtableItem.append(popupContainer)

      let popupHead = document.createElement("div");
      popupHead.classList.add('popup-head')
      popupContainer.append(popupHead)

      let popupContent = document.createElement("div");
      popupContent.classList.add('popup-content')
      popupContainer.append(popupContent)

      let sweetTitle = document.createElement("span");
      sweetTitle.classList.add("sweet-title");
      sweetTitle.innerHTML = candy.fields.Name;
      popupHead.appendChild(sweetTitle);

      let sweetDes = document.createElement("span");
      sweetDes.classList.add("sweet-des");
      sweetDes.innerHTML = candy.fields.Description;
      popupContent.appendChild(sweetDes);

      let sweetDate = document.createElement("span");
      sweetDate.classList.add("sweet-date");
      sweetDate.innerHTML = candy.fields.Date;
      popupContent.appendChild(sweetDate);

      //create the popup for this candy item
      airtableItem.addEventListener('click', () => {
        popupContainer.classList.toggle('is-open')
      })

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
    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 300);
    
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