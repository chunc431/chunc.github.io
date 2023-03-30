//ACTIVE BUTTON
// Add an event listener for when the page has finished loading
window.addEventListener("load", function() {

// Get all the section elements
var sections = document.querySelectorAll("section");

// Get all the link elements in the header
var links = document.querySelectorAll("header nav a");

// Add an event listener for when the user scrolls
window.addEventListener("scroll", function() {

// Loop through each section and check if it's visible
for (var i = 0; i < sections.length; i++) {
var section = sections[i];
if (isElementInViewport(section)) {

// Add the "active" class to the corresponding link element
links[i].classList.add("active");
} else {

// Remove the "active" class from the link element
links[i].classList.remove("active");
}
}
});

// Check if an element is visible in the viewport
function isElementInViewport(element) {
var rect = element.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}
});

//ACTIVE SECTION
// Add an event listener for when the page has finished loading
window.addEventListener("load", function() {

// Get all the section elements
var sections = document.querySelectorAll("section");

// Get all the link elements in the header
var links = document.querySelectorAll("header nav a");

// Add an event listener for when the user scrolls
window.addEventListener("scroll", function() {

// Loop through each section and check if it's visible
for (var i = 0; i < sections.length; i++) {
var section = sections[i];
if (isElementInViewport(section)) {

// Add the "active" class to the corresponding link element
links[i].classList.add("active");

// Display the current section and hide the other sections
section.style.display = "block";
for (var j = 0; j < sections.length; j++) {
if (j !== i) {
sections[j].style.display = "none";
}
}
}
}
});

// Check if an element is visible in the viewport
function isElementInViewport(element) {
var rect = element.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}
});

//CONTACT