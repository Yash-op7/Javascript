- differnce between type and interface in ts
- how to itertae over maps
- what is the variable type of func in `function func(){}`, is it var, let or const, also when we're not in strict mode and simple do x=10; where x was not initialized or declared before then what type of variable is x, var, let or const?
- what is the difference in terms of functionality and the way js treats different types of functions created by these methods:
function greet(name) {
  return `Hello, ${name}`;
}
Function Expressions (Anonymous Functions)
const add = function(a, b) {
  return a + b;
};
Arrow Functions (ES6+)
const multiply = (a, b) => a * b;  // Concise syntax
default params:
function greet(name = "World") {
  return `Hello, ${name}`;
}