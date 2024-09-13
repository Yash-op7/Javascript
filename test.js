const a = [1, 2, 3, [43], 5];
const b = a.slice(1, 4);

b[2][0] = 54;

console.log(a, b);