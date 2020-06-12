'use strict';
//===================Open Hours Array======================================
var openHourTimes = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//================ Random Number Generator=====================
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
// console.log('maybeeeeeeeee');
//=========================Plan for Event===============================

//I have to create a form in html that i can collect data from and implement into my constructor
//to make a new function.

//These are what i need to get from the form and what i need to call

//
// name, minCustomers, maxCustomers,avgCookie

// seattleLocation.getCookieSales();
// seattleLocation.renderLocationTable();



//========================Add Event======================================
var addLocationForm = document.getElementById('addLocation');
addLocationForm.addEventListener('submit', addLocationFromForm);

//=======================Create Funtion that gathers input and adds it to constructor==============
function addLocationFromForm(eventLocation){
  eventLocation.preventDefault();//=======Prevents page from refreshing
  var name = eventLocation.target.name.value;//if this doesn't work try unique var
  var minCustomers = eventLocation.target.minCustomers.value;
  var maxCustomers = eventLocation.target.maxCustomers.value;
  var avgCookie = eventLocation.target.avgCookie.value;

  var newLocation = new StoreLocation(name, minCustomers, maxCustomers,avgCookie);
  newLocation.getCookieSales();
  newLocation.renderLocationTable();
  return newLocation;
}
// console.log('New location: ', newLocation);
//====================================End Add New Location function=====================

//========================Render Table to Page===================
function renderLocationTable(){
  var table = document.getElementById('location-table');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');

  tableCell.textContent= this.name;
  tableRow.appendChild(tableCell);

  for(var i = 0; i < openHourTimes.length; i++){

    tableCell = document.createElement('td');
    tableCell.textContent= this.cookiesSold[i];
    tableRow.appendChild(tableCell);
  }
  var cellDailyTotal = document.createElement('td');
  cellDailyTotal.textContent=this.dailyTotal;
  tableRow.appendChild(cellDailyTotal);
  table.appendChild(tableRow);
  // console.log('working?????????',this.dailyTotal);
}
//=====================Render Header to Page=============
function renderHeader(){
  var table = document.getElementById('location-table');
  var headerRow = document.createElement('tr');
  var locationHeader = document.createElement('td');
  locationHeader.textContent = 'Location';
  headerRow.appendChild(locationHeader);

  for(var i = 0; i < openHourTimes.length; i++){

    var hourRow = document.createElement('td');
    hourRow.textContent= openHourTimes[i];
    headerRow.appendChild(hourRow);
  }
  var cellDailyTotal = document.createElement('td');
  cellDailyTotal.textContent = 'Daily Location Total';
  headerRow.appendChild(cellDailyTotal);

  table.appendChild(headerRow);
}
//=====================Render Footer to Page=============
function renderFooter(){
  var table = document.getElementById('location-table');
  var footerRow = document.createElement('tr');
  var locationFooter = document.createElement('td');
  locationFooter.textContent = 'Totals';
  footerRow.appendChild(locationFooter);

  var totalSales = 0;
  for(var i = 0; i < openHourTimes.length; i++){
    var hourTotal = document.createElement('td');
    var hourlyTotal = 0;
    for(var j =0; j< allLocations.length; j++) {
      hourlyTotal += allLocations[j].cookiesSold[i];
      totalSales += allLocations[j].cookiesSold[i];
      hourTotal.textContent= hourlyTotal;
      footerRow.appendChild(hourTotal);
    }
  }
  var cellDailyTotal = document.createElement('td');
  cellDailyTotal.textContent = totalSales;
  footerRow.appendChild(cellDailyTotal);

  table.appendChild(footerRow);
}
//========================Oject Location Constructor=======================

function StoreLocation(name, minCustomers, maxCustomers,avgCookie){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.cookiesSold = [];
  this.dailyTotal = 0; //Allistair helped be figure out how to add the total
}

//===================GetCookieSales Method===========
StoreLocation.prototype.getCookieSales = function (){
  for(var i = 0; i < openHourTimes.length; i++){

    var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
    var sales = Math.ceil(customers * this.avgCookie);
    this.cookiesSold.push(sales);
    this.dailyTotal = this.dailyTotal + sales;
    // console.log('Printed store',this.dailyTotal);
  }
};

StoreLocation.prototype.renderLocationTable= renderLocationTable;


//===================Constructed Locations========================

//============================Attempt to put data into an array and access it=====================
//=======Created this array with known data from locations. I want to access this array, store that data in another array
// that can be used to both construct and render my table.  Curently, I have an array that I populated. I want a loop to 
//popluate that array for me.
var locationData = [
  ['Seattle', 23, 65, 6.3 ],
  ['Tokyo', 3, 24, 1.2 ],
  ['Dubai', 11, 38, 3.7],
  ['Paris', 20, 38, 2.3 ],
  ['Lima', 2, 16, 4.6]];


// var allLocations= [];
// for(var i=0; i < locationData.length; i++){
//   // var newLocation = new Array;
//   // for(var j=0; j < 4; j++){
//   //   newLocation[i] = locationData[i][j];

//   //   console.log('New Location:',newLocation);
//   // }
//   allLocations[i] = locationData[i];
//   console.log('All locations; ',allLocations[i]);
//   allLocations = new StoreLocation( allLocations[i]);
// }

// var allLocations =[locationData[0],locationData[1],locationData[2],locationData[3],locationData[4]];



// console.log('this is the final array; ', allLocations);


// allLocations= new StoreLocation(locationData[0]);

// this.allLocations.push(newLocation);
// this.cookiesSold.push(sales);
//============save for later, trying something else
// for(var i = 0; i < 5 ; i++){
//   var allLocations = [];
//   for(var j = 0; j< locationData.length; j++){

//     allLocations += locationData[j][i];
//   }
//   allLocations = new StoreLocation();
// }
//============================================================End attempt, uncomment below to show table=============

//============================How I did it before Thursday, result would have input below footer=======================
var seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3 );
var tokyoLocation = new StoreLocation('Tokyo', 3, 24, 1.2 );
var dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7 );
var parisLocation = new StoreLocation('Paris', 20, 38, 2.3 );
var limaLocation = new StoreLocation('Lima', 2, 16, 4.6 );
var allLocations = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];//I want to push input into this array
//=========================Invocations======================================

renderHeader();

for(var ii = 0; ii < allLocations.length; ii++){
  var newLocation = this.allLocations[ii];
  newLocation.getCookieSales();
  newLocation.renderLocationTable();
}

renderFooter();
console.log('Made it to the bottom');
