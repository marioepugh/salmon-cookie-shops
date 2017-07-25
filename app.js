'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  //do work


  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  console.log(hours, 'hours array');

  // This is an array to hold our locations
  // checking my merge issues
  // maybe i am getting my acp down
  // the last One



  var allLocations = [];

  // This is to access the table this is in the DOM
  var tableEl = document.getElementById('table');

  // We use this constructor to make our objects
  function Location(locationName, minCustomers, maxCustomers, avgCookiesPerSale){
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookiesPerDay = 0;
    allLocations.push(this);
  }
  Location.prototype.resetTable = function() {
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookiesPerDay = 0;
  };

  Location.prototype.calcCustomersPerHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };

  Location.prototype.calcCookiesSoldEachHour = function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      // console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  };

  Location.prototype.render = function(){
    this.resetTable();
    this.calcCookiesSoldEachHour();
    var trEl = document.createElement('tr');

    var nameTdEl = document.createElement('th');
    nameTdEl.textContent = this.locationName;
    trEl.appendChild(nameTdEl);

    for(var j = 0; j < this.cookiesSoldEachHour.length; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[j];
      trEl.appendChild(tdEl);
    }

    var totalTdEl = document.createElement('td');
    totalTdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(totalTdEl);
    tableEl.appendChild(trEl);

    // var hourlyTdEl = document.createElement('td');
    // hourlyTdEl.textContent = this.totalCookiesPerDay

  };



  new Location('Pike', 23, 65, 6.3);
  new Location('Seatac', 3, 24, 1.2);
  new Location('Seattle Center', 11, 38, 3.7);
  new Location('Capitol Hill', 20, 38, 2.3);
  new Location('Alki', 2, 16, 4.6);
  // new Location('Poulsbo', 2, 16, 4.6);

  // This function is used to make the table header
  function makeHeaderRow(){

    var trEl = document.createElement('tr');

    var emptyThEl = document.createElement('th');
    emptyThEl.textContent = '';
    trEl.appendChild(emptyThEl);

    for (var i = 0; i < hours.length; i++) {
      var thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    }

    var totalThEl = document.createElement('th');
    totalThEl.textContent = 'Daily Total:';
    trEl.appendChild(totalThEl);

    tableEl.appendChild(trEl);
  }

  // Location.prototype.
  function makeFooterRow() {
    var trEl = document.createElement('tfoot');

    var totalTdEl = document.createElement('td');
    totalTdEl.textContent = 'Hourly Totals';
    trEl.appendChild(totalTdEl);

    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = 0;
      for(var j = 0; j < allLocations.length; j++) {
        hourlyCookies += allLocations[j].cookiesSoldEachHour[i];
      }
      // console.log(this.cookiesSoldEachHour, "this.cookiesSoldEachHour");
      var hourlyTdEl = document.createElement('td');
      hourlyTdEl.textContent = hourlyCookies;
      trEl.appendChild(hourlyTdEl);
    }
    tableEl.appendChild(trEl);
  };

  //  This single function renders all of the individual cookie sales rows
  function renderShops(){
    for(var i = 0; i < allLocations.length; i++){
      allLocations[i].render();
    }
  }

  table.innerHTML = '';
  makeHeaderRow();
  renderShops();
  // Location.prototype.
  makeFooterRow();

  function handleNewSubmit(event){
    event.preventDefault();
    var locationName = event.target.elements["locationName"].value;
    var maxCustomers = parseInt(event.target.elements["maxCustomers"].value);
    var minCustomers = parseInt(event.target.elements["minCustomers"].value);
    var avgCookiesPerSale = parseInt(event.target.elements["avgCookiesPerSale"].value);
    new Location(locationName, maxCustomers, minCustomers, avgCookiesPerSale);
    table.innerHTML = '';
    makeHeaderRow();
    renderShops();
    // Location.prototype.
    makeFooterRow();
  }


  // console.log(document.getElementById('submitButton'));
  document.getElementById('cookieCounter').addEventListener('submit', handleNewSubmit);
  // function(){
  //   console.log("submit");
  // });

});



// 'use strict';
//
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// console.log(hours, 'hours array');
//
// // This is an array to hold our locations
// // checking my merge issues
// // maybe i am getting my acp down
// // the last One
// // On a monday
//
//
// var allLocations = [];
//
// // This is to access the table this is in the DOM
// var tableEl = document.getElementById('table');
//
// // We use this constructor to make our objects
// function Location(locationName, minCustomers, maxCustomers, avgCookiesPerSale){
//   this.locationName = locationName;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookiesPerSale = avgCookiesPerSale;
//   this.customersPerHour = [];
//   this.cookiesSoldEachHour = [];
//   this.totalCookiesPerDay = 0;
//   allLocations.push(this);
// }
//
// Location.prototype.calcCustomersPerHour = function(){
//   for(var i = 0; i < hours.length; i++){
//     this.customersPerHour.push((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
//   }
// };
//
// Location.prototype.calcCookiesSoldEachHour = function(){
//   this.calcCustomersPerHour();
//   for(var i = 0; i < this.customersPerHour.length; i++){
//     this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//     this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//     console.log(this.totalCookiesPerDay, 'running daily cookie total');
//   }
// };
//
// Location.prototype.render = function(){
//   this.calcCookiesSoldEachHour();
//   var trEl = document.createElement('tr');
//
//   var nameTdEl = document.createElement('td');
//   nameTdEl.textContent = this.locationName;
//   trEl.appendChild(nameTdEl);
//
//   for(var j = 0; j < this.cookiesSoldEachHour.length; j++){
//     var tdEl = document.createElement('td');
//     tdEl.textContent = this.cookiesSoldEachHour[j];
//     trEl.appendChild(tdEl);
//   }
//
//   var totalTdEl = document.createElement('td');
//   totalTdEl.textContent = this.totalCookiesPerDay;
//   trEl.appendChild(totalTdEl);
//   tableEl.appendChild(trEl);
//
//   // var hourlyTdEl = document.createElement('td');
//   // hourlyTdEl.textContent = this.totalCookiesPerDay
//
// };
//
//
//
// new Location('Pike', 23, 65, 6.3);
// new Location('Seatac', 3, 24, 1.2);
// new Location('Seattle Center', 11, 38, 3.7);
// new Location('Capitol Hill', 20, 38, 2.3);
// new Location('Alki', 2, 16, 4.6);
//
// // This function is used to make the table header
// function makeHeaderRow(){
//
//   var trEl = document.createElement('tr');
//
//   var emptyThEl = document.createElement('th');
//   emptyThEl.textContent = '';
//   trEl.appendChild(emptyThEl);
//
//   for (var i = 0; i < hours.length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     trEl.appendChild(thEl);
//   }
//
//   var totalThEl = document.createElement('th');
//   totalThEl.textContent = 'Daily Total:';
//   trEl.appendChild(totalThEl);
//
//   tableEl.appendChild(trEl);
// }
//
// Location.prototype.makeFooterRow = function() {
//   var trEl = document.createElement('tfoot');
//
//   var totalTdEl = document.createElement('td');
//   totalTdEl.textContent = 'Hourly Totals';
//   trEl.appendChild(totalTdEl);
//
//   for (var i = 0; i < hours.length; i++) {
//     var hourlyCookies = 0;
//     for(var j = 0; j < allLocations.length; j++) {
//       hourlyCookies += allLocations[j].cookiesSoldEachHour[i];
//     }
//     console.log(this.cookiesSoldEachHour, "this.cookiesSoldEachHour");
//     var hourlyTdEl = document.createElement('td');
//     hourlyTdEl.textContent = hourlyCookies;
//     trEl.appendChild(hourlyTdEl);
//   }
//   tableEl.appendChild(trEl);
// };
//
// //  This single function renders all of the individual cookie sales rows
// function renderShops(){
//   for(var i = 0; i < allLocations.length; i++){
//     allLocations[i].render();
//   }
// }
//
// makeHeaderRow();
// renderShops();
// Location.prototype.makeFooterRow();
