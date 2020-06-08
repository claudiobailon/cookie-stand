'use strict';

var locationObject = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  getRandomNumber: function(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
  },// used this page to figure out how to produce a random number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 customersPerHour: function (){

 }

};

console.log('max customers: '+ locationObject['maxCustomers']);

console.log(locationObject['getRandomNumber'](locationObject.minCustomers, locationObject.maxCustomers));

