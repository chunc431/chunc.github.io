document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const scrollBtn = document.getElementById("scrollBtn");
  const secondaryPage = document.getElementById("secondaryPage");
  const modal = document.getElementById("modal-container");
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

  const closeModal = () => {
    modal.style.display = "none";
  };

  const openModal = (item) => {
    modal.style.display = "block";

    let projectDetails = `
      <div class="project-details">
      <div class="modal-content">
        <div class="title">
          ${item.title}
        </div>
        <div class="about">
          ${item.about}
        </div>
        <div class="img">
          <img class="modal-image" src="${item.image}"/>
        </div>
        <a class="link" href="${item.link.url}">
          ${item.link.text}
        </a>
        <div class="description">
          ${item.description}
        <span class="close-btn">&times;</span>
        </div>
        </div>`;

    modal.innerHTML = '';
    modal.insertAdjacentHTML('beforeend', projectDetails);

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", closeModal);
  };

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("click", () => {
      openModal();
    });
  });

  // Render items function
  function renderItems(items) {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem, index) => {
      gridItem.addEventListener("click", () => {
        openModal(items[index]);
      });
    });
  }

  // Fetch data from project.json
  fetch("project.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (items) {
      renderItems(items); // Items are loaded in their original order
    });
});
