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

### `for of`: to loop iterable objects like arrays, strings, maps,
```js
for (let value of iterable) {
  // Code to execute for each value
}

const array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);  // Outputs: 1, 2, 3, 4, 5
}
```

# `var`, `let` and `const`
## `var`
- function-scoped: if its defined anywhere in the global space, then it is immediately hoisted and is available everywhere in the global scope, otherwise if its defined in a function then its only accessible within that function
- hoisted, meaning you can use them before the declaration line, but they are initialized to `undefined`

## `let`
- block scoped, not accessable outside the block
- not hoisted

## `var` v/s let or const, Basic difference:
these are the two fundamentally basic differences:
1. if you define a variable using let or const inside any if block, then it won't be available outside the block, but if you use var inside an if block, then it will be available everywhere inside the current function (by default we can consider the global scope as a main function of sorts)
2. var is hoisted and initialized wth `undefined` and let/const are not hosited, they are not initialized and TDZ applies to them (Temporal Dead Zone, that is while they are hoisted they cannot be accessed or initialized before the declaration statement.) 

Note:
- avoid var, prefer let and const
- const objects and arrays can still have their contents modified.

# data types
## primitve
- Number, String, Boolean, null, undefined, Symbol, and BigInt.
- no `char` type, use String
## non-primitive:
- Non-primitive types: Objects (arrays, functions, etc.).

```js
let num = 42;            // Number
let str = "Hello";       // String
let bool = true;         // Boolean
let arr = [1, 2, 3];     // Array (an object)
let obj = { key: 'val' };// Object
```
# ⭐️ loose equality `==` versus strict equality `===`
- Use === (strict equality): Avoids type coercion (e.g., 2 == "2" is true, but 2 === "2" is false).

# conditional statements:
- if else syntax is same
- below is `switch`:
```js
switch (x) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Other");
}
```
⭐️ Note: Always include break to avoid fall-through behavior in switch statements.

# Functions:
## Function Declaration
```js
function greet(name) {
  return `Hello, ${name}`;
}
```
## Function Expressions (Anonymous Functions)
```js
const add = function(a, b) {
  return a + b;
};
```
## Arrow Functions (ES6+)
```js
const multiply = (a, b) => a * b;  // Concise syntax
```
## default params:
```js
function greet(name = "World") {
  return `Hello, ${name}`;
}
```


# ⭐️ Objects / Dicts:
```js
let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log(`Hello, I'm ${this.gender}`);
    },
    gender: 'M'
  };
  
person.greet();
  ```
- ### Dot notation: `person.name`
- ### Bracket notation: `person['name']`

## Destructuring:
```js
let { name, age } = person;
console.log(name, age);
```

## Arrays:
```js
let arr = [1, 2, 3];
arr.push(4);  // Adds to end
arr.pop();    // Removes last element
mapped_array = arr.map(x => x * 2);        // [2, 4, 6] (maps to new array)
filtered_array = arr.filter(x => x > 1);     // [2, 3] (filters array)
sum = arr.reduce((a, b) => a + b);  // 6 (reduces to single value)

arr = [1, 2, 'bird']    // can have different data types
```

## string interpolation:
```js
let name = "John";
let greeting = `Hello, ${name}!`;
```

# Strict mode:
- jUse "use strict"; at the top of your JS file or function to enforce stricter parsing rules.
```js
"use strict";
x = 10;  // Throws an error because x is not declared
```

# Arrow Functions Have No this Context
In JavaScript, the `this` keyword refers to the current execution context (i.e., the object to which the function belongs). However, in traditional functions, the value of this can be tricky, especially in callbacks and asynchronous code because this can change based on how the function is called.

Arrow functions, on the other hand, do not have their own this context. Instead, they inherit this from the surrounding scope (i.e., the scope in which the arrow function is defined). This behavior is called lexical scoping of this.

Why Is This Useful?
In traditional functions, this can behave unpredictably inside callbacks, and we often need to use hacks like .bind(this) to ensure this refers to the correct object. But with arrow functions, since this is lexically bound, it always refers to the outer scope's this, making it easier to work with asynchronous code or callbacks.

See the below example,
without arrow functions we need to bind the surrounding context to current context:
```js
function Person(name) {
  this.name = name;

  setTimeout(function() {
    console.log(this.name);
  }.bind(this), 1000);  // Manually binding `this` to the outer context
}

const person = new Person('Alice');
// Output: Alice
```
But with arrow functions its much simpler:
```js
function Person(name) {
  this.name = name;

  setTimeout(() => {
    console.log(this.name);  // Arrow function doesn't create its own `this`, it uses the outer `this`.
  }, 1000);
}

const person = new Person('Alice');
// Output: Alice
```
Summary: `this` is lexical and refers to the context in which the arrow function was defined. This is especially useful in callbacks and asynchronous code where you want to maintain the value of this from the outer scope.

# `null` keyword:
- **Definition**: `null` is a special value in JavaScript that represents the intentional absence of any object value. It is a primitive value and is often used to indicate that a variable has been explicitly set to have no value.
- **Type**: When you check the type of `null` using `typeof`, it will return "object". This is considered a quirk of JavaScript.
```javascript
console.log(typeof null); // "object"
```
- **Usage**: It is commonly used to indicate that a variable should be empty or not point to any object.

# `undefined` keyword:
- **Definition**: undefined is a primitive value automatically assigned to variables that have been declared but not initialized. It also signifies that a property does not exist on an object.
- **Type**: When you check the type of undefined, it will return "undefined".
```javascript
let x;
console.log(typeof x); // "undefined"
```
- **Usage**: It is used by JavaScript to denote that a variable or property has not been assigned a value or does not exist.

# Sumamry: Difference between null and undefined:

- Intent: null is explicitly assigned to a variable to indicate that it has no value, while undefined is automatically assigned by JavaScript when a variable is declared but not initialized.
- Type: null has a type of "object", whereas undefined has a type of "undefined".
- Use Cases: You typically use null to represent the absence of a value where you expect a value, and undefined to represent uninitialized variables or non-existent properties.

# Data types:
## Number
- very large range
- used for both int and float values
- with float has precision upto 15-17 decimals.
- `Infinity` &  `-Infinity`:
```js
let posInf = Infinity;
let negInf = -Infinity;
```
- `NaN`:
```js
let parsed = Number('abc');
console.log(parsed); // Output: NaN

let result = 0 / 0;
console.log(result); // Output: NaN

// Checking for NaN
console.log(Number.isNaN(result)); // Output: true
```
## BigInt:
- for numbers outside Number range
- For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1), use BigInt.
- initialization: use n at the end:
```js
let bigInt = 123456789012345678901234567890n;
console.log(bigInt); // 123456789012345678901234567890n
```

# `String`:
- Immutable
- use '' or "" or `` to initialize
```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}`;
console.log(str3); // Output: Hello, World

let length = str1.length; // Length of the string
console.log(length); // Output: 5

let upperStr = str1.toUpperCase(); // Convert to uppercase
console.log(upperStr); // Output: HELLO
```

# `Boolean`:
- Falsy Values: 0, -0, NaN, null, undefined, '' (empty string), and false are considered falsy.
```js
let isTrue = true;
let isFalse = false;
```
# `Numeber`:


# Useful methods:
```js
// stoi
let parsed = Number('43.21');

// to_string
let x = 2.35
print(typeof x.toString())
```

# Mutability
- Primitive Data Types (e.g., Number, String, Boolean, null, undefined, Symbol, BigInt) are immutable. This means their values cannot be changed after assignment.

```js
let a = "hello";
a[0] = "H";  // No effect, strings are immutable
a = "Hello";  // Reassigns the entire variable, creates a new string
```
- Objects and Arrays are mutable. This means their internal state (properties or elements) can be changed even if they are declared with const.

```js
const obj = { name: "Alice" };
obj.name = "Bob";  // Object is mutable, properties can be changed
```

# Data Structures:
## `Set`:
```js
const set = new Set([1, 2, 3]);
set.add(3);  // No effect, duplicates not allowed
set.delete(2);
console.log(set.has(1));  // true
```
- `add(value)`: Adds a value to the set.
- `delete(value)`: Removes a value.
- `has(value)`: Checks if a value exists.
-`size`: Returns the number of elements.
- `clear()`: Removes all elements.

## `Map`:
```js
const map = new Map();
map.set('name', 'Alice');
map.set(1, 'one');  // Keys can be numbers
console.log(map.get('name'));  // Alice
```

- `set(key, value)`: Adds a key-value pair.
- `get(key)`: Retrieves a value by key.
- `has(key)`: Checks if a key exists.
- `delete(key)`: Removes a key-value pair.
- `size`: Returns the number of elements.
- `.keys()`, `.values()`, `.entries()` - for iterations.
- `.clear()`
- `.forEach((value, key) => {...})`:
```js
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

# Map vs Object: Differences:

- Key Types:
    - Object: Keys are strings or Symbols.
    - Map: Keys can be any type (including objects and functions).
- Ordering:
    - Object: Does not guarantee order.
    - Map: Maintains insertion order.
- Prototype:
    - Object: Has a prototype chain.
    - Map: Does not have a prototype chain.
- Methods:
    - Object: Limited set of methods, not as flexible.
    - Map: Richer set of methods for operations and iterations.
- Performance:
    - Object: Can be slower for frequent additions and deletions.
    - Map: Generally faster for frequent additions and deletions and provides better performance for large collections of data.

⭐️ For Multiset just use Map as a counter
⭐️ Heaps don't exist, :) wtf


# `this` keyword:
- `this` refers to the current execution context

```js
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name);  // `this` refers to obj
  }
};
obj.greet();  // Output: Alice
```
- In Functions: this refers to the global object (window in browsers).
In Arrow Functions:

- Arrow functions don’t have their own `this`; they inherit it from the surrounding scope (lexical `this`).

⭐️ In strict mode, this in a standalone function is undefined.

# `try...catch...finally` Syntax
```js
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that always runs (optional)
}

try {
  let result = riskyOperation();
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('Cleanup code runs here');
}
```
# Advanced Operators:
## Nullish Coalescing (??)
- Returns the right-hand operand if the left-hand operand is null or undefined.

```js
let x = null;
let result = x ?? 'default';  // 'default'
```

## Optional Chaining (?.)
- Safely access deeply nested properties. If a property is null or undefined, it returns undefined instead of throwing an error.

Example:

```js
let obj = { user: { name: 'Alice' } };
console.log(obj.user?.name);  // Alice
console.log(obj.user?.address?.city);  // undefined, no error
```

## Ternary Operator (?:)
```js
let isLoggedIn = true;
let greeting = isLoggedIn ? 'Welcome back!' : 'Please log in';
```