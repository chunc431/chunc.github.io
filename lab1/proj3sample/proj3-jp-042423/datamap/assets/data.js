function renderItems(collection) {
  const collectionList = document.getElementById("collection");

  let mapTop = 41.0168;
  let mapBottom = 40.43883;
  let mapLeft = -74.36797;
  let mapRight = -73.50215;

  let mapWidth = mapRight - mapLeft;
  let mapHeight = mapTop - mapBottom;

  collection.forEach((item) => {
    let deltaX = mapRight - item.longitude;
    let percentX = (deltaX / mapWidth) * 100;
    let deltaY = mapTop - item.latitude;
    let percentY = (deltaY / mapHeight) * 100;

    if (item.longitude && item.latitude) {
      const dotContainer = document.createElement("div");
      dotContainer.classList.add("map-dot");
      collectionList.appendChild(dotContainer);
      dotContainer.style.right = `${percentX}%`;
      dotContainer.style.top = `${percentY}%`;

      if (item.borough == "Manhattan") {
        dotContainer.style.backgroundColor = `red`;
      } else if (item.borough == "Brooklyn") {
        dotContainer.style.backgroundColor = `blue`;
      } else if (item.borough == "Queens") {
        dotContainer.style.backgroundColor = `orange`;
      } else if (item.borough == "Staten Island") {
        dotContainer.style.backgroundColor = `green`;
      } else if (item.borough == "Bronx") {
        dotContainer.style.backgroundColor = `purple`;
      }

      // tool tip
      let toolTip = document.querySelector(".tool-tip");
      let streetname = item.street_name;
      let blocknum = item.block;
      let lotnum = item.lot;
      let housenum = item.house_number;

      dotContainer.addEventListener("mouseenter", () => {
        toolTip.classList.add("is-hovering");
        toolTip.innerHTML = `Street Name: ${streetname}<br>Block No: ${blocknum}<br>Lot No: ${lotnum}<br>House No: ${housenum}`;
      });
      dotContainer.addEventListener("mouseleave", () => {
        toolTip.classList.remove("is-hovering");
      });

      // pop up
      let popUpContainer = document.querySelector('.pop-up-container');

      dotContainer.addEventListener('click', () => {
		//add open class to popup
		popUpContainer.classList.add('is-open')

		//create your popup template
		let itemDetails = `
			<div>${item.inspection_type}</div>
		`

		//clear previous data
		popUpContainer.innerHTML = ''

		//add new data
		popUpContainer.insertAdjacentHTML('beforeend', itemDetails)
	  })


      popUpContainer.addEventListener('click', () => {
		//remove open class when clicking the popup
		popUpContainer.classList.remove('is-open')
	  })
    }
  });

  document.body.addEventListener("mousemove", (e) => {
    document.querySelector(".tool-tip").style.left = `${e.clientX}px`;
    document.querySelector(".tool-tip").style.top = `${e.clientY}px`;
  });
}

// Fetch gets your JSON file.
fetch("assets/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (collection) {
    renderItems(collection.reverse()); // In reverse order
  });
