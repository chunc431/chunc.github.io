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
// get the value of the data-candy attribute
      let candyType = mainElement.getAttribute("data-candy");

// apend pop up classes and pop up content classes for each candy type
    if (candyType === 'Chewy') {
      let popUpChewy = document.createElement("div");
      popUpChewy.classList.add("pop-up-1");
      airtableItem.appendChild(popUpChewy);

      let popUpTitle = document.createElement("div");
      popUpTitle.classList.add("pop-up-title");
      popUpChewy.appendChild(popUpTitle);

      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUpChewy.appendChild(popUpContent);
    }

    if (candyType === 'Chocolate') {
      let popUpChoc = document.createElement("div");
      popUpChoc.classList.add("pop-up-2");
      airtableItem.appendChild(popUpChoc);

      let popUpTitle = document.createElement("div");
      popUpTitle.classList.add("pop-up-title");
      popUpChoc.appendChild(popUpTitle);

      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUpChoc.appendChild(popUpContent);
    }

    if (candyType === 'Hard') {
      let popUpHard = document.createElement("div");
      popUpHard.classList.add("pop-up-3");
      airtableItem.appendChild(popUpHard);

      let popUpTitle = document.createElement("div");
      popUpTitle.classList.add("pop-up-title");
      popUpHard.appendChild(popUpTitle);

      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUpHard.appendChild(popUpContent);
    }

// append pop up content spans to title & content classes
      let sweetTitle = document.createElement("span");
      sweetTitle.innerHTML = candy.fields.Name;
      document.querySelector(".pop-up-title").appendChild(sweetTitle);

      let sweetDate = document.createElement("span");
      sweetDate.innerHTML = candy.fields.Date;
      document.querySelector(".pop-up-content").appendChild(sweetDate);

      let sweetDes = document.createElement("span");
      sweetDes.innerHTML = candy.fields.Description;
      document.querySelector(".pop-up-content").appendChild(sweetDes);

      // get all pop up classes
      const popUp1 = document.querySelector(".pop-up-1");
      const popUp2 = document.querySelector(".pop-up-2");
      const popUp3 = document.querySelector(".pop-up-3");

      // get the value of the data-candy attribute
      const candyType = mainElement.getAttribute("data-candy");

      // add click event listener to the sweet image
      sweetImage.addEventListener("click", function (event) {
        // check the candy type and toggle the appropriate pop up
        if (candyType === "Chewy") {
          popUp1.classList.toggle("pop-up-1-show");
        } else if (candyType === "Chocolate") {
          popUp2.classList.toggle("pop-up-2-show");
        } else if (candyType === "Hard") {
          popUp3.classList.toggle("pop-up-3-show");
        }
        event.stopPropagation();
      });

      // add click event listener to document to hide pop ups when clicked outside
      document.addEventListener("click", function (event) {
        if (!popUp1.contains(event.target)) {
          popUp1.classList.remove("pop-up-1-show");
        }
        if (!popUp2.contains(event.target)) {
          popUp2.classList.remove("pop-up-2-show");
        }
        if (!popUp3.contains(event.target)) {
          popUp3.classList.remove("pop-up-3-show");
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
