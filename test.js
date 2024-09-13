"use strict";

function Fruit() {
  this.color = 'red';
  this.greet = function() {
    console.log('greetings');
  }
}

Fruit.prototype.info = function() {
  console.log(`This fruit is ${this.color}.`);
}

const apple = new Fruit();

console.log(apple);

apple.info();
apple.greet();

console.log(typeof Fruit)