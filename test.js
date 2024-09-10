"use strict";

function print(x) {
  console.log(x);
}

class Car {
  constructor(brand, isFast=false) {
    this.brand = brand;
    this.isFast = isFast;
  }
  honk() {

  }
}

const lambo = new Car('Lamborghini');
print(lambo.__proto__);
lambo.__proto__ = null;
print(lambo.__proto__ === Car.prototype)
