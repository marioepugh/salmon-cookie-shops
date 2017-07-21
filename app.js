'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(hours, 'hours array');

// This is an array to hold our locations
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
    console.log(this.totalCookiesPerDay, 'running daily cookie total');
  }
};

Location.prototype.render = function(){
  this.calcCookiesSoldEachHour();
  var trEl = document.createElement('tr');

  var nameTdEl = document.createElement('td');
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
};


new Location('Pike', 23, 65, 6.3);
new Location('Seatac', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

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

//  This single function renders all of the individual cookie sales rows
function renderShops(){
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
}

makeHeaderRow();
renderShops();
