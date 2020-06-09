'use strict';

var locationObject = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  getCustomersPerHour: function(){
    return Math.floor((Math.random() * (this.maxCustomers-this.minCustomers)) + this.minCustomers);
  }, // used this page to figure out how to produce a random number https://www.w3schools.com/jsref/jsref_random.asp

 getSales: function (){

  return Math.round(locationObject['getCustomersPerHour']() * locationObject.avgCookie)
 },
  salesData{}
  

};

console.log('max customers: '+ locationObject['maxCustomers']);
console.log('Avg Customers Per Hour: ' + locationObject['getCustomersPerHour']());
console.log('Cookie Sales: ' + locationObject['getSales']())
// console.log(locationObject['getRandomNumber'](locationObject.minCustomers, locationObject.maxCustomers));


