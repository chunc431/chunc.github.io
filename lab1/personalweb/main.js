document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollBtn');
    const secondaryPage = document.getElementById('secondaryPage');
  
    scrollBtn.addEventListener('click', () => {
      const scrollDuration = 1000;
      const startTime = performance.now();
  
      const animateTop = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
  
        secondaryPage.style.top = `${100 - progress * 100}vh`;
  
        if (progress < 1) {
          requestAnimationFrame(animateTop);
        }
      };
  
      requestAnimationFrame(animateTop);
    });
  });
  