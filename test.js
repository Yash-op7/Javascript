class Car {
  constructor(speed) {
    this.#speed = speed;
  }
  #speed;

  #explode = () => {
    console.log('kaboom 💥');
  }

  accelerate() {
    this.#speed += 10;
    console.log(`Speed: ${this.#speed}`);
    if(this.#speed > 35) {
      this.#explode();
    }
  }
}

const myCar = new Car(5);
myCar.accelerate();  // Output: Speed: 15
myCar.accelerate();  // Output: Speed: 25
myCar.accelerate();  // Output: Speed: 35
myCar.accelerate();  // Output: Speed: 45, hence 💥
// console.log(myCar.#speed);  // Error: Private field '#speed' must be declared in an enclosing class
