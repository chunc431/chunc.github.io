document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollBtn');
  const secondaryPage = document.getElementById('secondaryPage');

  const scrollToElement = (element, duration) => {
    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop;
    const distanceToScroll = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = easeInOutQuad(timeElapsed, startPosition, distanceToScroll, duration);
      window.scrollTo(0, progress);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    };

    window.requestAnimationFrame(animation);
  };

  scrollBtn.addEventListener('click', () => {
    scrollToElement(secondaryPage, 1200); // Adjust the duration (in milliseconds) for a slower or faster scroll
  });
});
