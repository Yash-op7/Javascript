"use strict";

// promise example
let flag = false;
const p = new Promise((resolve, reject) => {
    // do something
    if (flag) {
        resolve('resolved ✅');
    } else {
        reject('rejected ❌')
    }
});

p.then((operationStatus) => {
    console.log(operationStatus);
}).catch((operationStatus) => {
    console.log(operationStatus);
});