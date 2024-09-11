class Car {
  constructor(brand) {
    this.brand = brand;
  }
  #speed= 0;
  info() {
    console.log(`a ${this.brand} car with a speed of ${this.#speed}`);
  }
}

const l = new Car('lambo');
l.info();
