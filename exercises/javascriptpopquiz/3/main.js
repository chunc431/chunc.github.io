// console.log(date);

let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let colors = ["#255c34", "#726756", "#703a56", "#953e00"];

function displayDate() {
  let date = new Date();
  container.appendChild(otherText);
  container.appendChild(dateDiv);
  dateDiv.classList.add("date");
  otherText.classList.add("other");
  otherText.innerHTML = "right now it is ";
  dateDiv.innerHTML = date;
}

function clearPage() {
  dateDiv.innerHTML = " ";
}

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors;
}

displayDate();
setInterval(displayDate, 1000);




