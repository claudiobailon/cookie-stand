'use strict';
//===================Open Hours Array======================================
var openHourTimes = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//================ Random Number Generator=====================
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

function getCustomersPerHour(){

  var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
  return customers;

}
function getCookieSales (){
  for(var i = 0; i < openHourTimes.length; i++){

    var sales = Math.ceil(this.getCustomersPerHour() * this.avgCookie);
    this.cookiesSold.push(sales);
    this.dailyTotal = this.dailyTotal + sales;

  }

  function renderLocation(){
  
    var parentUnorderedList = document.getElementById(this.id);

    for(var i = 0; i < openHourTimes.length; i++){

      var storeSales = document.createElement('li');
      storeSales.textContent = openHourTimes[i] + ' : ' + this.cookiesSold[i] + ' cookies';
      parentUnorderedList.appendChild(storeSales);

    }

    var nameParagraph= document.getElementById(this.paragraphId);
    nameParagraph.textContent= this.name;

    storeSales = document.createElement('li');
    storeSales.textContent = 'Total: ' + this.dailyTotal + ' cookies';
    parentUnorderedList.appendChild(storeSales);
  }
  //========================Oject Location Constructor=======================

  function Location(name, paragraphId, minCustomers, maxCustomers,avgCookie){
    this.name = name;
    this.paragraphId = paragraphId;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookie = avgCookie;
    this.cookiesSold = [];
    this.dailyTotal = 0; //Allistair helped be figure out how to add the total

  }

  var seattleLocation = new Location('Seattle', 'seattle-name-p', 23, 65, 6.3 );




  //==========================Seattle==================================================
  // var seattleLocation = {
  //   name:'Seattle',
  //   paragraphId: 'seattle-name-p',
  //   minCustomers: 23,
  //   maxCustomers: 65,
  //   avgCookie: 6.3,
  //   cookiesSold: [],
  //   dailyTotal: 0,

  //   getCustomersPerHour: getCustomersPerHour,
  //   getCookieSales: getCookieSales,
  //   renderLocation: renderLocation,

  
  // getCustomersPerHour: function(){
  //   var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
  //   // console.log('customers',customers);
  //   return customers;
  // },
  // getCookieSales:function(){
  //   for(var i = 0; i < openHourTimes.length; i++){
  //     var sales = Math.ceil(this.getCustomersPerHour() * this.avgCookie);
  //     this.cookiesSold.push(sales);
  //     this.dailyTotal = this.dailyTotal + sales;
  // console.log('sales',this.cookiesSold[i]);
  // }
  // },

  // renderToPage: function(){
  //   var parentUnorderedList = document.getElementById('seattle-ul');
  //   for(var i = 0; i < openHourTimes.length; i++){
  //     var storeSales = document.createElement('li');
  //     storeSales.textContent = openHourTimes[i] + ' : ' + this.cookiesSold[i] + ' cookies';
  //     parentUnorderedList.appendChild(storeSales);
  //   }
  //   storeSales = document.createElement('li');
  //   storeSales.textContent = 'Total: ' + this.dailyTotal + ' cookies';
  //   parentUnorderedList.appendChild(storeSales);

  // },
};



//======================================Tokyo=========================================
// var tokyoLocation = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookie: 1.2,
//   cookiesSold: [],
//   dailyTotal: 0,


// //======================================Dubai=========================================
// var dubaiLocation = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookie: 3.7,
//   cookiesSold: [],
//   dailyTotal: 0,


// //======================================Paris=========================================
// var parisLocation = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookie: 2.3,
//   cookiesSold: [],
//   dailyTotal: 0,

// //======================================Lima==========================================
// var limaLocation = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookie: 4.6,
//   cookiesSold: [],
//   dailyTotal: 0,


seattleLocation.getCustomersPerHour();
seattleLocation.getCookieSales();
seattleLocation.location();

// tokyoLocation.getCustomersPerHour();
// tokyoLocation.getCookieSales();
// tokyoLocation.renderToPage();

// dubaiLocation.getCustomersPerHour();
// dubaiLocation.getCookieSales();
// dubaiLocation.renderToPage();

// parisLocation.getCustomersPerHour();
// parisLocation.getCookieSales();
// parisLocation.renderToPage();

// limaLocation.getCustomersPerHour();
// limaLocation.getCookieSales();
// limaLocation.renderToPage();

console.log('Avg Cookies per cutomer: ', seattleLocation.avgCookie);
console.log('Avg Customers Per Hour: ' + seattleLocation.getCustomersPerHour(this.sales));
