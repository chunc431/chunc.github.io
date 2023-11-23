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
        dotContainer.style.backgroundColor = "#8a0000";
      } else if (item.borough == "Brooklyn") {
        dotContainer.style.backgroundColor = "#520000";
      } else if (item.borough == "Queens") {
        dotContainer.style.backgroundColor = "#ba5959";
      } else if (item.borough == "Staten Island") {
        dotContainer.style.backgroundColor = "#c13535";
      } else if (item.borough == "Bronx") {
        dotContainer.style.backgroundColor = "#cf8080";
      }

      // tool tip
      let toolTip = document.querySelector(".tool-tip");
      let streetname = item.street_name;
      let blocknum = item.block;
      let lotnum = item.lot;
      let housenum = item.house_number;
      let latitude = item.latitude;
      let longitude = item.longitude;

      dotContainer.addEventListener("mouseenter", () => {
        toolTip.classList.add("is-hovering");
        toolTip.innerHTML = `Street Name: ${streetname}<br>Block No: ${blocknum}<br>Lot No: ${lotnum}<br>House No: ${housenum}<br>Location: (${latitude}, ${longitude})`;
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
        let itemDetails = 
        `<div class="item-details">
          <div class="header">
            <img class="header-logo" src="imgs/logo.png">
            <div class="order-no"><span class="work-order">Work Order</span> <span class="work-id">${item.job_ticket_or_work_order_id}</span></div>
          </div>
          <div class="title">
            <span class="title-1">New York Rodent Inspections</span><br>
            <span class="title-2">New York Health and Hygiene</span>
          </div>
          <div class="report">
            Report of Inspection
          </div>
          <div class="inspection">
            <div class="type"><span class="type-1">Inspection Type: </span> <span class="type-2">${item.inspection_type}</span></div>
            <div class="inspection-date"><span class="date-1">Inspection Date: </span> <span class="date-2">${item.inspection_date}</span></div>
          </div>
          <div class="table">
            <table class="table">
            <tr>
              <td colspan="1"><span class="borough">Borough: <br> ${item.borough}</span></td>
              <td colspan="1"><span class="boro-code">Boro Code: <br> ${item.boro_code}</span></td>
              <td colspan="1"><span class="zip-code">Zip Code: <br> ${item.zip_code}</span></td>
            </tr>
            <tr>
              <td colspan="2"><span class="bbl">BBL: <br> ${item.bbl}</span></td>
              <td colspan="2"><span class="job-id">Job ID: <br> ${item.job_id}</span></td>
            </tr>
            </table>
          </div>
          <div class="result">
            <div class="result"><span class="result-1">Result: </span> <span class="result-2">${item.result}</span></div>
            <div class="approv-date"><span class="a-date-1">Approved Date: </span> <span class="a-date-2">${item.approved_date}</span></div>
          </div>
          <div class="info">
            <span class="info">If you have any questions or concerns about the inspection findings or the corrective actions recommended, please contact the NYC Department of Health and Mental Hygiene at:<br>
            Phone: 311 (or 646-676-4870 for calls outside of NYC)<br>
            Email: nycdoh@health.nyc.gov<br>
            You can also visit our website at nyc.gov/health for more information about preventing and addressing rodent activity in and around your property. Thank you for your attention to this matter.</span>
          </div>
          <div class="back-container">
            <button class="back">Back</button>
          </div>
          </div>`;

        //clear previous data
        popUpContainer.innerHTML = ''

        //add new data 
        popUpContainer.insertAdjacentHTML('beforeend', itemDetails)

        // Add event listener to the 'back' button
        const backButton = popUpContainer.querySelector('.back');
        backButton.addEventListener('click', () => {
          popUpContainer.classList.remove('is-open')
        })
      })
    }
  });

  //tool tip offset
  document.body.addEventListener("mousemove", (e) => {
    const xOffset = 300;
    const yOffset = 100;
    const toolTip = document.querySelector(".tool-tip");
    const toolTipWidth = toolTip.offsetWidth;
    const toolTipHeight = toolTip.offsetHeight;
    document.querySelector(".tool-tip").style.left = `${e.clientX - toolTipWidth + xOffset}px`;
    document.querySelector(".tool-tip").style.top = `${e.clientY - toolTipHeight + yOffset}px`;
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