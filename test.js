"use strict";

const test_value_change = function (arr) {
    // arr = [2, 3, 41];
    arr[2] = 5000;      // this changes the original
    return;
}

const arr = [1, 2, 3];
console.log(arr);
test_value_change(arr);
console.log(arr);
