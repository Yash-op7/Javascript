let p = new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      let id = setTimeout(resolveInner, 1000); // After 1000ms (1 second), resolveInner will be called
      console.log(`${id} is the timer's id`);
    })
  );
});
console.log(p);
let id2 = setTimeout(() => console.log(p), 1100);
console.log('TEST',id2)
