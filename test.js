function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
  }
  

doSomething()
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
//   .catch((err) => {
//     console.error(err, "\nDo that");
//   })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });


  process.on("unhandledRejection", (reason, promise) => {
    // Add code here to examine the "promise" and "reason" values
    console.log(reason)
    console.log(promise)
  });
  