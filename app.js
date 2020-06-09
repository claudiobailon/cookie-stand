'use strict';

var locationSeattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  getCustomersPerHour: function(){
    return Math.floor((Math.random() * (this.maxCustomers-this.minCustomers)) + this.minCustomers);
  }, // used this page to figure out how to produce a random number https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/

 getSales: function (){

  return Math.round(locationSeattle['getCustomersPerHour']() * locationSeattle.avgCookie)
 },
 

 salesData: [this.avgCookie, this.getCustomersPerHour, this.getSales],
};


console.log('max customers: '+ locationSeattle['maxCustomers']);
console.log('Avg Customers Per Hour: ' + locationSeattle['getCustomersPerHour']());
console.log('Cookie Sales: ' + locationSeattle['getSales']())
console.log(locationSeattle['salesData']);
//console.log(locationSeattle['getRandomNumber'](locationSeattle.minCustomers, locationSeattle.maxCustomers));


