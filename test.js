"use strict";

class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    // console.log(this);
    console.log(`${this.name} is eating.`);
  }
}

const tom = new Person('tom');
tom.eat();

// setTimeout(tom.eat.bind(tom), 1000);


