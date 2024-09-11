class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

const tom = new Person('tom');
tom.eat();