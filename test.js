const canWalk = {
  walk() {
    console.log(`${this.name} is walking`);
  }
};

const canSwim = {
  swim() {
    console.log('Swimming');
  }
};

// Factory function to create a person with composed abilities
function createPerson(name) {
  const person = { name };  // Create a base object with name property
  return Object.assign(person, canWalk, canSwim);  // Mix in behaviors
}

const bob = createPerson('Bob');
bob.walk();  // Output: Walking
bob.swim();  // Output: Swimming
console.log(bob);

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} is walking (the Person class object)`);
  }
}
const bob2 = new Person('bob');
bob2.walk();
console.log(bob2);