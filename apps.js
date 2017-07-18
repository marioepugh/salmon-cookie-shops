'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeUl = {
  name: 'pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avrCookiesPerCust: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  // totalCookiesPerDay: 0,
  calcOneHoursCust: function(){
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.avrCustomerPerCust;
  },
  calcCustomersEachHour: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersEachHour.push(this.calcOneHoursCust());
      // var liEl = document.createElement('li');
      // leil.textContent = storeHours[i] + ': ' + this.storeHours[i];
      // pikeUl.appendChild(liEl);
    }
  }
};
// pikeUl.render();
pikeUl.calcCustomersEachHour();
// pike.calcCustomersEachHour();
// pike.caclTotalCookiesPerDay();
console.log(pikeUl.CustomersEachHour);
//
//
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
