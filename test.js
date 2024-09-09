"use strict";



let obj = { user: { name: 'Alice' } };
console.log(obj.user?.name);  // Alice
console.log(obj.user?.address?.city);  // undefined, no error