document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const scrollBtn = document.getElementById("scrollBtn");
  const secondaryPage = document.getElementById("secondaryPage");
  const modal = document.getElementById("modal-container");
  const closeBtn = document.querySelector(".close-btn");
  const gridItems = document.querySelectorAll(".grid-item");

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > 0) {
      header.classList.add("scrolling-down");
    } else {
      header.classList.remove("scrolling-down");
    }
  };

  window.addEventListener("scroll", handleScroll);

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

  scrollBtn.addEventListener("click", () => {
    scrollToElement(secondaryPage, 1200);
  });

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("click", () => {
      openModal();
    });
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });
});
