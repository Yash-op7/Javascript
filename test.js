"use strict";

class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} the regular guy is eating`);
  }

}

class Engineer extends Person {
  constructor(name) {
    super(name);
    this.profession = 'Engineer';
    this.major = 'Comp. Sci';
  }
  eat() {
    console.log(`${this.name} the ${this.profession} is eating`);
  }
  work() {
    this.eat();
    console.log(`${this.name} is working as a ${this.profession}`);
  }
}

class CloudEngineer extends Engineer {
  constructor(name) {
    super(name);
    this.specialty = 'Cloud';
  }
  work() {
    this.eat();
    console.log(`${this.name} is working as a ${this.specialty} ${this.profession}`);
  }
}

// const guy = new Person('tom');
// guy.eat();

// const sde = new Engineer('bob');
// sde.work();
// console.log(sde.name);

const tim = new CloudEngineer('tim');
tim.work();