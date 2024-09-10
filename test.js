"use strict";

const employee = {
  calcTax() {
    console.log('tax is 10%');
  },
};

const arjun = {
  salary: '50k'
};

// ⭐️ now if we want to access the properties and methods of the employee object in the arjun object then we can write employee as a prototype for arjun:
arjun.__proto__ = employee;
arjun.calcTax();