"use strict";

async function getData() {
  try {
    console.log('Fetching Data...');
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve('Data received', 'abc', 123), 1000);
    });
    console.log(data);  // Output: Data received
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
