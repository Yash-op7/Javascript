"use strict";

function print(x) {
  console.log(x);
}

class Car {
  constructor(brand, isFast=false) {
    this.brand = brand;
    this.isFast = isFast;
  }

}

const lambo = new Car('Lamborghini');
lambo.topSpeed = '400mph';
Object.seal(lambo);
lambo.topSpeed = '350mph';

print(lambo)