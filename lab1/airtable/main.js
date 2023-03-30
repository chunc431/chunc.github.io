var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keyweomR3DyiEOj84",
}).base("appRg418XISw0Yzad");


base("playlist")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 50,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (song, index) {
        console.log("song", song.fields);

        let gridItems = document.querySelector(".grid-items");

        let gridItem

        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("data-title", song.fields.title);

        let songTitle = document.createElement("h2");
        songTitle.classList.add('grid-item--title')
        songTitle.innerHTML = song.fields.title
        gridItem.append(songTitle);

        gridItems.append(gridItem);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );