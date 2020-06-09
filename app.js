'use strict';



function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

var seattleLocation = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  customersPerHour = getRandomNumber(this.minCustomers, this.maxCustomers),

  // getCustomersPerHour: function(){

  //   return Math.floor((Math.random() * (this.maxCustomers-this.minCustomers)) + this.minCustomers);
  //   // used this page to figure out how to produce a random number https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
  // }, 

 getSales: function (){
  var sales = this.customersPerHour * this.avgCookie;
  return Math.round(sales);
  
  },

salesData: [this.avgCookie, this.customersPerHour, this.getSales],

renderToPage : function(){
  
  var parentUnorderedList = document.getElementById('seattle-ul');
  var listItem = document.createElement('li');
  listItem.textContent= seattleLocation.getSales() ;
  parentUnorderedList.appendChild(listItem);
  
  }
};

seattleLocation.renderToPage();
// console.log('max customers: '+ seattleLocation['maxCustomers']);
console.log('Avg Cookies per cutomer: ', seattleLocation.avgCookie);
console.log('Avg Customers Per Hour: ' + seattleLocation['customersPerHour']);
//console.log('sales: ',sales)
console.log('Cookie Sales: ' + seattleLocation['getSales']())
console.log(seattleLocation.salesData);
//console.log(seattleLocation['getRandomNumber'](seattleLocation.minCustomers, seattleLocation.maxCustomers));


