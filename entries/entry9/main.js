let body = document.body;

function option1On() {
  option1.classList.toggle("option1On");
}

let option1 = document.querySelector(".option1");
option1.addEventListener("click", option1On);
option1.textContent = 'Not quite';

function option2On() {
  option2.classList.toggle("option2On");
}

let option2 = document.querySelector(".option2");
option2.addEventListener("click", option2On);
option2.textContent = 'Not quite';

function option3On() {
  option3.classList.toggle("option3On");
}

let option3 = document.querySelector(".option3");
option3.addEventListener("click", option3On);
option3.textContent = 'Not quite';

function option4On() {
  option4.classList.toggle("option4On");
}

let option4 = document.querySelector(".option4");
option4.addEventListener("click", option4On);
option4.textContent = 'Not quite';

function option5On() {
  option5.classList.toggle("option5On");
}

let option5 = document.querySelector(".option5");
option5.addEventListener("click", option5On);
option1.textContent = 'Correct!';