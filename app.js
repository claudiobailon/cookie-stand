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
// console.log('New location: ', newLocation);

//=======================Create Funtion that gathers input and adds it to constructor==============
function addLocationFromForm(eventLocation){
  eventLocation.preventDefault();//=======Prevents page from refreshing
  var name = eventLocation.target.name.value;//if this doesn't work try unique var
  var minCustomers = parseInt(eventLocation.target.minCustomers.value);
  var maxCustomers = parseInt(eventLocation.target.maxCustomers.value);
  var avgCookie = parseInt(eventLocation.target.avgCookie.value);

  var newLocation = new StoreLocation(name, minCustomers, maxCustomers,avgCookie);

  allLocations.push(newLocation);
  newLocation.getCookieSales();

  document.getElementById('location-table').deleteRow(-1);//https://www.w3schools.com/jsref/met_table_deleterow.asp
  newLocation.renderLocationTable();
  renderFooter();
  document.getElementById('addLocation').reset(); //https://www.w3schools.com/jsref/met_form_reset.asp

  // return newLocation;
}
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

var seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3 );
var tokyoLocation = new StoreLocation('Tokyo', 3, 24, 1.2 );
var dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7 );
var parisLocation = new StoreLocation('Paris', 20, 38, 2.3 );
var limaLocation = new StoreLocation('Lima', 2, 16, 4.6 );
var allLocations = [];

allLocations.push(seattleLocation);
allLocations.push(tokyoLocation);
allLocations.push(dubaiLocation);
allLocations.push(parisLocation);
allLocations.push(limaLocation);


//=========================Invocations======================================

renderHeader();

for(var ii = 0; ii < allLocations.length; ii++){
  var brandNewLocation = this.allLocations[ii];
  brandNewLocation.getCookieSales();
  brandNewLocation.renderLocationTable();
  //  try pushing here
}

renderFooter();
console.log('Made it to the bottom');
