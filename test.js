"use strict";



const intervalId = setInterval(() => console.log('Tick'), 1000);
// To clear the interval: clearInterval(intervalId);

setTimeout(() => clearInterval(intervalId), 4100);  // Executes after 1 second