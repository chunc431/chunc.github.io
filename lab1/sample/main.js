window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  var progress = scrollTop / (scrollHeight - clientHeight);
  
  var glows = document.querySelectorAll(".glow");
  for (var i = 0; i < glows.length; i++) {
    var hue = 360 * progress;
    glows[i].style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
  }
});
