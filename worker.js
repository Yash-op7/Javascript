// worker.js
let result = 0;
for (let i = 0; i < 1e10; i++) {
    result += i;
}
parentPort.postMessage(result);
