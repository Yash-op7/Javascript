# Key concepts and differences in JS (compared to C++, Python, Java):

- ## Dynamic Typing:
    - Variables can hold values of any type without explicit type declarations.
    - Type Coercion
- ## First-class functions:
    - ### Functions as Objects: 
        - Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions. This allows for powerful functional programming patterns.
    - ### Closures:
        - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.
        - This is a fundamental concept, especially for asynchronous programming.


# Syntax

## Loops:
For and while are same as c++
### `for`:
```js
for (let i = 0; i < 5; i++) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}
```
### `while`:
```js
let i = 0;
while (i < 5) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
  i++;
}
```

### `for in`: to iterate over enumerable properties of an object
```js
for (let key in object) {
  // Code to execute for each property
}

const person = { name: 'Alice', age: 25 };

for (let key in person) {
  console.log(key, person[key]);  // Outputs: name Alice, age 25
}
```

### `for in`: to loop iterable objects like arrays, strings, maps,
```js
for (let value of iterable) {
  // Code to execute for each value
}

const array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);  // Outputs: 1, 2, 3, 4, 5
}
```
