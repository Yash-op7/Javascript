// main.js
const { Worker } = require('worker_threads');

console.log('a');
const worker = new Worker('./worker.js');
console.log('b');
worker.on('message', (result) => {
    console.log('Result from worker:', result);
});
console.log('c');

