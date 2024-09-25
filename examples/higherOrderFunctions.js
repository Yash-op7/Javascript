const radii = [1, 2, 3, 4];

/*
3 tasks:
    - calculate area, circumference, radii
*/

const calculate = (arr, logic) => {
    const output = [];
    for(let idx of arr.keys()) {
        output[idx] = logic(arr[idx]);
    }
    return output;
}

const area = (r) => Math.PI * r * r;
const diameter = (r) => 2 * r;
const circumference = (r) => 2 * Math.PI * r;

console.log(calculate(radii, area));
console.log(calculate(radii, circumference));
console.log(calculate(radii, diameter));

// Next task, since this functionality of calculate() is similar to map(), convert this calculate() function to a polyfill of map(), basically implement map(), how its is invoked and what it returns. -> see higherOrderFunctions2.js

