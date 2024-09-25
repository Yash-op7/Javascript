const radii = [1, 2, 3, 4];

/*
3 tasks:
    - calculate area, circumference, radii -> see higherOrderFunctions.js
*/


// Next task, since this functionality of calculate() is similar to map(), convert this calculate() function to a polyfill of map(), basically implement map(), how its is invoked and what it returns.
// it should be called like this
// console.log(
//     radii.calculate(area)
// );

// Solution: 2 steps:
// -   to use calculate() as arr.calculate(), it needs to be a member method for that we need to modify radii or arr's prototype class, hence Array.prototype.calculate needs to be defined
// - inside the function definition of Array.prototype.calculate, how to access the array on which it is called as we are only passing the logic callback, hence the this keyword

// OLD IMPLEMENTATION
// const calculate = (arr, logic) => {
//     const output = [];
//     for(let idx of arr.keys()) {
//         output[idx] = logic(arr[idx]);
//     }
//     return output;
// }

// SOlution:
Array.prototype.calculate = function (logic_callback) {
    const output = [];
    console.log(this)
    // for(let idx of this.keys()) {        ! MISTAKE
    //     output[idx] = logic_callback(this[idx]);
    // }
    for(let i = 0;i<this.length;i++) {
        output[i] = logic_callback(this[i]);
    }
    return output;
}

const area = (r) => Math.PI * r * r;
const diameter = (r) => 2 * r;
const circumference = (r) => 2 * Math.PI * r;

console.log(
    radii.calculate(area)
);

