"use strict";

const output = document.getElementById("result");
// output.innerHTML = '<p>resolved</p>';
const resolveBtn = document.getElementById("resolve-btn");
const rejectBtn = document.getElementById("reject-btn");

let state = false;

// promise example
// write a promise to resolve or reject based on the button clicked
const p = new Promise((resolve, reject) => {
  // do something
  resolveBtn.addEventListener("click", () => resolve("resolved ✅"));
  rejectBtn.addEventListener("click", () => reject("rejected ❌"));
});

p.then((outputMessage) => {
  output.innerHTML = `${outputMessage}`
}).catch((outputMessage) => (output.innerHTML =`${outputMessage}`));

console.log(p);