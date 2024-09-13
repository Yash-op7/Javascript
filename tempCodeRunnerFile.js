const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
fruits.unshift("Lemon");
fruits[fruits.length] = "Kiwi";
delete fruits[0];
const drinks = ['Milk', 'Coffee', 'Water'];

console.log(fruits);
console.log(fruits.concat(drinks));
console.log(fruits.concat("Strawberry"));

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();



