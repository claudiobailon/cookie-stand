'use strict';
//===================Open Hours Array======================================
var openHourTimes = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//================ Random Number Generator=====================
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
console.log('maybeeeeeeeee');
//=======================Render Location to Page=================

// function renderStoreLocation(){

//   var parentUnorderedList = document.getElementById(this.id );
//   // parentUnorderedList.appendChild(storeSales);

//   for(var i = 0; i < openHourTimes.length; i++){

//     var storeSales = document.createElement('li');
//     storeSales.textContent = openHourTimes[i] + ' : ' + this.cookiesSold[i] + ' cookies';
//     console.log('cookies: ',this.cookiesSold[0]);
//     parentUnorderedList.appendChild(storeSales);

//   }

//   // var nameParagraph= document.getElementById(this.id );
//   // nameParagraph.textContent= this.name;

//   storeSales = document.createElement('li');
//   storeSales.textContent = 'Total: ' + this.dailyTotal + ' cookies';
//   parentUnorderedList.appendChild(storeSales);
// }
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
  console.log('working?????????',this.dailyTotal);
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

  for(var i = 0; i < openHourTimes.length; i++){
    var hourTotal = document.createElement('td');
    var hourlyTotal = 0;
    for(var j =0; j< allLocations.length; j++) {
      hourlyTotal += allLocations[j].cookiesSold[i];
      hourTotal.textContent= hourlyTotal;
      footerRow.appendChild(hourTotal);
    }
  }
  var cellDailyTotal = document.createElement('td');
  cellDailyTotal.textContent = '';
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

// StoreLocation.prototype.renderStoreLocation= renderStoreLocation;

StoreLocation.prototype.renderLocationTable= renderLocationTable;


//===================Constructed Locations========================

var seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3 );
var tokyoLocation = new StoreLocation('Tokyo', 3, 24, 1.2 );
var dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7 );
var parisLocation = new StoreLocation('Paris', 20, 38, 2.3 );
var limaLocation = new StoreLocation('Lima', 2, 16, 4.6 );

var allLocations = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];
//=========================Invocations======================================
renderHeader();

seattleLocation.getCookieSales();
seattleLocation.renderLocationTable();

tokyoLocation.getCookieSales();
tokyoLocation.renderLocationTable();

dubaiLocation.getCookieSales();
dubaiLocation.renderLocationTable();

parisLocation.getCookieSales();
parisLocation.renderLocationTable();

limaLocation.getCookieSales();
limaLocation.renderLocationTable();

renderFooter();
//console.log('Made it to the bottom');
