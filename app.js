'use strict';

var openHourTimes = ['7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];

function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

var seattleLocation = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  cookiesSold: [],
  getCustomersPerHour: function(){

    var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
    return customers;

  },


  getCookieSales: function (){
    var sales = this.getCustomersPerHour * this.avgCookie;
    return Math.ceil(sales);
  },

salesData: [this.avgCookie, this.customersPerHour, this.getCookieSales],

renderToPage : function(){
  
  var parentUnorderedList = document.getElementById('seattle-ul');
  var listItem = document.createElement('li');
  listItem.textContent= seattleLocation.getCookieSales() ;//concatenate
  parentUnorderedList.appendChild(listItem);
  
  }
};

seattleLocation.renderToPage();
// console.log('max customers: '+ seattleLocation['maxCustomers']);
console.log('Avg Cookies per cutomer: ', seattleLocation.avgCookie);
console.log('Avg Customers Per Hour: ' + seattleLocation['customersPerHour']);
//console.log('sales: ',sales)
console.log('Cookie Sales: ' + seattleLocation['getCookieSales']());
console.log(seattleLocation.salesData);
//console.log(seattleLocation['getRandomNumber'](seattleLocation.minCustomers, seattleLocation.maxCustomers));


