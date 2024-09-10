"use strict";

function Fruit() {
  this.color = 'red';
}

Fruit.prototype.info = function() {
  console.log(`This fruit is ${this.color}.`);
}

const apple = new Fruit();

console.log(apple);

apple.info();