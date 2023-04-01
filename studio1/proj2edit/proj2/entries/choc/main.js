//BASE
var Airtable = require("airtable");

var base = new Airtable(
  {apiKey:"keysA75kB2fYdEVkh"}
).base("appvhTzvMMYJYoGDS");


base("sweets").select({
  view: "Grid view",
  // filterByFormula: "{Type} = 'Hard'"
})

.eachPage(
function page(candies, fetchNextPage){
  candies.forEach(
    function (candy) {
      let airtableItem = document.createElement("div");
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-Price", candy.fields.Price);
      
      let sweetImg = document.createElement("img");
      sweetImg.src = candy.fields.Imgs[0].url;
      document.querySelector('.sweet-image').appendChild(sweetImg);

      let sweetDate = document.createElement("span");
      sweetDate.innerHTML = candy.fields.Date;
      document.querySelector('.sweet-date').appendChild(sweetDate);
      
      airtableItem.append(sweetImg);
      airtableItem.append(sweetDate);

      document.querySelector('.sweet-image').appendChild(airtableItem);

    })
}
); 


//FILTER BY CANDY TYPE
// .eachPage(
// function page(candies, fetchNextPage){
//   candies.forEach(
//     function (candy) {
//       let airtableItem = document.createElement("div");
//       airtableItem.classList.add("airtable-item");
//       airtableItem.setAttribute("data-Price", candy.fields.Price);
      
//       let sweetImg = document.createElement("img");
//       sweetImg.src = candy.fields.Imgs[0].url;
//       document.querySelector('.sweet-image').appendChild(sweetImg);

//       let sweetDate = document.createElement("span");
//       sweetDate.innerHTML = candy.fields.Date;
//       document.querySelector('.sweet-date').appendChild(sweetDate);

//       let candyType = candy.fields.Type;
      
//       if (candyType === "Hard") {
//         airtableItem.append(sweetImg);
//         airtableItem.append(sweetDate);
//         document.querySelector('.sweet-image').appendChild(airtableItem);
//       } else {
//         airtableItem.style.display = "none";
//       }
//     })
// }
// );


//BUTTON
const buttons = document.querySelectorAll('button');
const activeClass = 'active';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('click');
    buttons.forEach(otherButton => {
      otherButton.classList.remove(activeClass);
    });
    button.classList.add(activeClass);
  });
});

//RESET 
function resetPage() {
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function(item) {
    item.classList.remove("five-filter-show", "five-filter-hide", "ten-filter-show", "ten-filter-hide", "twenty-filter-show", "twenty-filter-hide", "thirty-filter-show", "thirty-filter-hide", "forty-filter-show", "forty-filter-hide", "one-filter-show", "one-filter-hide");
  });
}

//FILTERS
// five
let fiveFilterBtn = document.getElementById("five");
let fiveClickCount = 0;
console.log(fiveFilterBtn);
fiveFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (fiveClickCount % 2 === 0) {
    fiveFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchFiveFilterBtn(item){
      if (item.dataset.price == "$0.05") {
        item.classList.add("five-filter-show");
        console.log(item);
      } else {
        item.classList.add("five-filter-hide");
      }
    });
  } else {
    fiveFilterBtn.classList.remove(activeClass);
  }

  fiveClickCount++;
});

// ten
let tenFilterBtn = document.getElementById("ten");
let tenClickCount = 0;
console.log(tenFilterBtn);
tenFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (tenClickCount % 2 === 0) {
    tenFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchTenFilterBtn(item){
      if (item.dataset.price == "$0.10") {
        item.classList.add("ten-filter-show");
        console.log(item);
      } else {
        item.classList.add("ten-filter-hide");
      }
    });
  } else {
    tenFilterBtn.classList.remove(activeClass);
  }

  tenClickCount++;
});

// twenty
let twentyFilterBtn = document.getElementById("twenty");
let twentyClickCount = 0;
console.log(twentyFilterBtn);
twentyFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (twentyClickCount % 2 === 0) {
    twentyFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchTwentyFilterBtn(item){
      if (item.dataset.price == "$0.20") {
        item.classList.add("twenty-filter-show");
        console.log(item);
      } else {
        item.classList.add("twenty-filter-hide");
      }
    });
  } else {
    twentyFilterBtn.classList.remove(activeClass);
  }

  twentyClickCount++;
});

// thirty
let thirtyFilterBtn = document.getElementById("thirty");
let thirtyClickCount = 0;
console.log(thirtyFilterBtn);
thirtyFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (thirtyClickCount % 2 === 0) {
    thirtyFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchThirtyFilterBtn(item){
      if (item.dataset.price == "$0.30") {
        item.classList.add("thirty-filter-show");
        console.log(item);
      } else {
        item.classList.add("thirty-filter-hide");
      }
    });
  } else {
    thirtyFilterBtn.classList.remove(activeClass);
  }

  thirtyClickCount++;
});

// forty
let fortyFilterBtn = document.getElementById("forty");
let fortyClickCount = 0;
console.log(fortyFilterBtn);
fortyFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (fortyClickCount % 2 === 0) {
    fortyFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchFortyFilterBtn(item){
      if (item.dataset.price == "$0.40") {
        item.classList.add("forty-filter-show");
        console.log(item);
      } else {
        item.classList.add("forty-filter-hide");
      }
    });
  } else {
    fortyFilterBtn.classList.remove(activeClass);
  }

  fortyClickCount++;
});

// one
let oneFilterBtn = document.getElementById("one");
let oneClickCount = 0;
console.log(oneFilterBtn);
oneFilterBtn.addEventListener("click", function(event){
  resetPage();
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  console.log(listofAirtableItems);

  if (oneClickCount % 2 === 0) {
    oneFilterBtn.classList.add(activeClass);
    listofAirtableItems.forEach(function searchOneFilterBtn(item){
      if (item.dataset.price == "$1.00") {
        item.classList.add("one-filter-show");
        console.log(item);
      } else {
        item.classList.add("one-filter-hide");
      }
    });
  } else {
    oneFilterBtn.classList.remove(activeClass);
  }

  oneClickCount++;
});