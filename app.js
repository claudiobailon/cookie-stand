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
    console.log('I am hoping this woooooorks',this.cookiesSold[i]);
  }

  table.appendChild(tableRow);
  console.log('working?????????');
}


//========================Oject Location Constructor=======================

function StoreLocation(name, id, minCustomers, maxCustomers,avgCookie){
  this.name = name;
  this.id = id;
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
    console.log('Printed store',this.dailyTotal);
  }
};

// StoreLocation.prototype.renderStoreLocation= renderStoreLocation;

StoreLocation.prototype.renderLocationTable= renderLocationTable;

//===================Constructed Locations========================

var seattleLocation = new StoreLocation('Seattle', 'seattle-name-p', 23, 65, 6.3 );


seattleLocation.getCookieSales();
seattleLocation.renderLocationTable();
console.log('Made it to the bottom');
// seattleLocation.renderStoreLocation;
// seattleLocation.location();

// console.log('Avg Cookies per cutomer: ', seattleLocation.avgCookie);
// console.log('Avg Customers Per Hour: ' + seattleLocation.getCustomersPerHour(this.sales));
