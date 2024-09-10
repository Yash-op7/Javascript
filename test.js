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

const gcd = (x, y) => {
  if (x > y) {
      swap(x, y);
  }
  if (x === 0) return y;
  return gcd(y%x, x);
};

print(gcd(5, 15));