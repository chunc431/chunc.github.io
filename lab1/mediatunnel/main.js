const primaryBlue = '#0074D9';
const primaryYellow = '#fffb00';

function updateBackgroundColor() {
  // Get the width of the browser window
  const width = window.innerWidth;

  if (width >= 1600) {
    document.body.style.backgroundColor = primaryBlue;
    return;
  } else if (width <= 400) {
    document.body.style.backgroundColor = primaryYellow;
    return;
  }

  const blueShade = Math.round(((width - 400) / (1600 - 400)) * 100);
  const yellowShade = 100 - blueShade;

  const mixedColor = mixColors(primaryBlue, primaryYellow, blueShade);

  document.body.style.backgroundColor = mixedColor;
}

function mixColors(color1, color2, percentage) {
  const r1 = parseInt(color1.substr(1, 2), 16);
  const g1 = parseInt(color1.substr(3, 2), 16);
  const b1 = parseInt(color1.substr(5, 2), 16);
  const r2 = parseInt(color2.substr(1, 2), 16);
  const g2 = parseInt(color2.substr(3, 2), 16);
  const b2 = parseInt(color2.substr(5, 2), 16);

  const r3 = Math.round((r2 - r1) * percentage / 100 + r1);
  const g3 = Math.round((g2 - g1) * percentage / 100 + g1);
  const b3 = Math.round((b2 - b1) * percentage / 100 + b1);

  return `rgb(${r3}, ${g3}, ${b3})`;
}

window.addEventListener('resize', updateBackgroundColor);

updateBackgroundColor();
