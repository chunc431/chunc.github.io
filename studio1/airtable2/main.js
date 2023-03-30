// getting airtable onto index.html

// make a new airtable object
var Airtable = require("airtable");

// make a variable called 'base', which will create a new airtable object with my API key and specific base reference code (both located in airtable)
var base = new Airtable(
  {apiKey: "keysA75kB2fYdEVkh"}
).base("appvhTzvMMYJYoGDS");
// input console.log(base); into developer to check if its working

// 'sweets' is the tab text of my airtable (base) which is put inside of a string + specify results 
base("sweets").select({
// only show results for 2 records
	// maxCandies
	view: "Grid view",
})
.eachPage(
	function page(candies, fetchNextPage){
// input console.log("running page function") & console.log("candies:", candies) <all candies> to test
		// console.log("running page function")
		// console.log("candies:", candies);
		// records = [Candy1, Candy2, Candy3]
// access each individual record instead of all (access each item in an array)
// sweet is a single record (name doesn't matter but use continuously)
		records.forEach(
			function (candy) {
// console.log single record to test
				// console.log("this is one sweet:", sweet)
// console.log all airtable fields 
				// console.log("this is my airtable fields", sweet.fields)
// console.log individual fields
				// console.log("category field", sweet.fields.Category);
				// console.log("price field", sweet.fields.Price);
// [position <items in an array start with a position of 0] --> access specific item in an array
				console.log("img", candy.fields.Imgs[0].url);

// img
// create an img html element (var name can be anything)
				var sweetImg = document.createElement("img");
// assign a css class 
				sweetImg.classList.add("airtable-image")
// put airtable img src inside our html img tag 
				sweetImg.src = sweet.fields.Imgs[0].url;
// append new img tag to html document
				document.body.appendChild(sweetImg);

// span (for text) (date of popularity) 
				var sweetDate = document.createElement("span");
				sweetDate.innerHTML = sweet.fields.Date;
				document.body.appendChild(sweetDate);
			}
			)
	}
);










// FILTERING

//filter button Price - "$0.10"
//user press filter button Price - "$0.10"
//see a list of candy associated with that filter ? has "$0.10" tag

//what we know
//record.fields.Price Gives us speciic mood tags > "$0.10"
//1 - document.body.createElement to create new html element 
//2 - htmlElement.classList.add("cssClassName")
//logic to get airtable sweet to html (machine categories):
	//1
	//2
	//set html content to airtable data
	//append html element to html body 

//how can we create a structure for filter: 
//button "$0.10"
//user press button, we can get that $0.10 is being pressed > search for "$0.10"

//structure to append airtable data to html 
//each sweet has its own div 
		//<div class="sweet 1" data-price = "$0.10" data-duration = "5min">
			//APPEND
			//<img src="url.png">
			//<span> data from airtable </span>
		//</div>
	//htmlElement.setAttribute("data-price", sweet.fields.Price);

// PRACTICE 

//Jake's example
// create div element for each record
let airtableItem = document.createElement("div");
// add a class to the record element
airtableItem.classList.add("airtable-item");
// set the data-year attribute equal to the value of the record year
// this will be used to sort items
airtableItem.setAttribute("data-year", record.fields.year);
// set the data-location attribute equal to the value of the record location
// this will be used to filter items
airtableItem.setAttribute("data-location", record.fields.location);








//FINAL 

// activate airtable object
var Airtable = require("airtable");

var base = new Airtable(
  {apiKey:"keyDd4ipeCQWl3r7x"}
).base("app8mVXPpMc3jUhsk");

base("Table 1").select({
    maxRecords: 5,
    // view: "Grid view",
}).eachPage(
  function page(records, fetchNextPage){
    console.log("records:", records); 
    records.forEach(
      function (record) {
        // pull my airtable data 
        // each record will have its own div
        let airtableItem = document.createElement("div");
        // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-mood", record.fields.Mood);
        
        
        // create a img tag for my album art 
        let albumCover = document.createElement("img");
        albumCover.src = record.fields.AlbumCover[0].url;
        // create a span for my artist name 
        let artistName = document.createElement("span");
        artistName.innerHTML = record.fields.ArtistName;
        
        // appending to div holding each airtable record 
        airtableItem.append(albumCover);
        airtableItem.append(artistName);
       // append div to body 
        document.body.append(airtableItem);
      }
    
    )
  }
); 

//BUTTON

//set up event listener for price button
//listen for user click, user clicks, search for divs with given data-price ($0.10)

//get our button using css ID
//assign a event listener to my button to listen for click
let empoweringFilterBtn = document.getElementById("Empowering");
empoweringFilterBtn.addEventListener("click", function(event){
  console.log("this is filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  
  // search for data-mood, containg empowering 
  listofAirtableItems.forEach(
    function searchEmpoweringFilter(item){
      // if item.dataset.mood equal to "Empowering, then we trigger something 
      if (item.dataset.mood == "Empowering") {
        // if the div has data-mood empowering, add red background by adding css class
        item.classList.add("empowering-filter-show");
        console.log(item);
      }
      else {
        item.classList.add("empowering-filter-hide");
      }
      
      
    }
  )
  
});












