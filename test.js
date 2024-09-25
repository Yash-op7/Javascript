const obj = Object.create({height:30});
console.log(obj.__proto__)      // {h:30}
console.log(obj.__proto__ === Object.prototype) // false
console.log(Object.prototype)       // null prototype {}

const obj2 = {h:30};
console.log(obj2.__proto__ === Object.prototype)        // true
