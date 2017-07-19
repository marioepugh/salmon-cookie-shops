'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(hours, 'hours array');

// pikePlace
var pikePlace = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  render: function(){
    var pikeList = document.getElementById('pike');
    // this.calcCookiesSoldEachHour();
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      pikeList.appendChild(liEl);
    }
    var totals = document.getElementById('pike');
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    totals.appendChild(totalLiEl);
  }
};

pikePlace.calcCookiesSoldEachHour();
pikePlace.render();
console.log(pikePlace.customersPerHour);

// seaTac
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  render: function(){
    var seaTacList = document.getElementById('seatac');
    // this.calcCookiesSoldEachHour();
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      seaTacList.appendChild(liEl);
    }
    var totals = document.getElementById('seatac');
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    totals.appendChild(totalLiEl);
  }
};

seaTac.calcCookiesSoldEachHour();
seaTac.render();
console.log(seaTac.customersPerHour);

// seattleCenter
var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  render: function(){
    var seattleCenterList = document.getElementById('seattlecenter');
    // this.calcCookiesSoldEachHour();
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      seattleCenterList.appendChild(liEl);
    }
    var totals = document.getElementById('seattlecenter');
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    totals.appendChild(totalLiEl);
  }
};

seattleCenter.calcCookiesSoldEachHour();
seattleCenter.render();
console.log(seattleCenter.customersPerHour);


// capitolHill
var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  render: function(){
    var capitolHillList = document.getElementById('capitolhill');
    // this.calcCookiesSoldEachHour();
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      capitolHillList.appendChild(liEl);
    }
    var totals = document.getElementById('capitolhill');
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    totals.appendChild(totalLiEl);
  }
};

capitolHill.calcCookiesSoldEachHour();
capitolHill.render();
console.log(capitolHill.customersPerHour);


// alki
var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 4.6,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  render: function(){
    var alkiList = document.getElementById('alki');
    // this.calcCookiesSoldEachHour();
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
    var totals = document.getElementById('alki');
    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    totals.appendChild(totalLiEl);
  }
};

alki.calcCookiesSoldEachHour();
alki.render();
console.log(alki.customersPerHour);

// var alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   customersPerHour: [],
//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
//     }
//   },
//   cookiesSoldEachHour: [],
//   totalCookiesPerDay: 0,
//   calcCookiesSoldEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < this.customersPerHour.length; i++){
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
//       this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
//       console.log(this.totalCookiesPerDay, 'running daily cookie total');
//     }
//   },
//   render: function(){
//     var alkiList = document.getElementById('alki');
//     // this.calcCookiesSoldEachHour();
//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
//       alkiList.appendChild(liEl);
//     }
//     var totals = document.getElementById('alki');
//     var totalLiEl = document.createElement('li');
//     totalLiEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
//     totals.appendChild(totalLiEl);
//   }
// };
//
// alki.calcCookiesSoldEachHour();
// alki.render();
// console.log(alki.customersPerHour);


//
// var edmondsBeach = {
//   name: 'edmondsBeach',
//   seagullCount: [52,46,76,87,365,13,38],
//   render: function(){
//     var eddie = document.getElementById('edmonds');
//     // This will render the seagull data array to the DOM
//     // We'll need a 'for' loop to iterate over the array
//     for(var i = 0; i < this.seagullCount.length; i++){
//       // There are three parts to this process:
//       // 1. Create an element
//       var liEl = document.createElement('li');
//       // 2. Give it content
//       liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//       // 3. Append it to a certain place in the DOM
//       // parentElement.appendChild(childElement)
//       eddie.appendChild(liEl);
//     }
//   }
// };
//
// edmondsBeach.render();
// //
// //
// // // var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// //
// //
// // var pike = {
// //   minCustPerHr: 10,
// //   maxCustPerHr: 100,
// //   avrCookiesPerCust: 3.4,
// //   customersEachHour: [],
// //   cookiesEachHour: [],
// //   totalCookiesPerDay: 0;
// //   (methods to calculate customer and cookie total)
// //   (method to calculate custoemrs per hour)
// // }
// //
// // = function(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // }
