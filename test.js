console.log('init');

let n = 100;

const cb = (x) => console.log(x);

setTimeout(()=>console.log('deez nuts'), 50);
for(let i=0;i<n;i++) {
    setTimeout(()=>cb(i), i);
}


// setTimeout(cb(100), 10);
// setTimeout(() => cb(100), 10);


console.log('fin');