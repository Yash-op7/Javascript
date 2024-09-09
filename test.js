"use strict";

const print = (x) => console.log(x);
const set = new Set([1, 2, 3]);
set.add(3);  // No effect, duplicates not allowed
set.delete(2);
console.log(set.has(1));  // true



print(set.size)
