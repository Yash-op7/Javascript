let person = {
    name: "John",
    age: 30,
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
  
  person.greet();
  