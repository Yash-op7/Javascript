class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log('Hello, ' + this.name);
  }
}

const alice = new Person('Alice');
alice.sayHello();  // Hello, Alice
