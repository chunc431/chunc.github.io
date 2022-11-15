let body = document.body;

let box = document.querySelector(".box");

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  box.classList.toggle("boxLight")
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);
