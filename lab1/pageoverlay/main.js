// script.js
window.addEventListener("scroll", () => {
  const secondaryPage = document.getElementById("secondarypage");
  const scrollTop = window.scrollY;

  if (scrollTop >= window.innerHeight) {
    secondaryPage.style.transform = "translateY(0)";
  } else {
    secondaryPage.style.transform = "translateY(-100%)";
  }
});
