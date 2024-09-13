const map = new Map();
const arr = [1, 2, 3, 5];
map.set(arr, 2);
arr.push(31);
map.set('name', 'Alice');
map.set(1, 'one');  // Keys can be numbers
const arr2 = [...arr];
map.set(arr2, 3);
console.log('test', map.get([...arr]));  // Alice

for (let x of map) {
    console.log(x);
}

