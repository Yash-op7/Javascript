- npm i --save-dev jest

lets say you want to test `sum.js`:
`sum.js`:
```js
function sum(a, b) {
    return a + b;
}

module.exports = sum;
```
so create a file named: `sum.test.js`:
```js
const sum = require('./sum')

test('Properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3);
});
```

- different possible methods:
    - `toBe()`
    - `toEqual()`

consider:
`cloneArray.js`:
```js
function cloneArray(arr) {
    return [...arr];
}

module.exports = cloneArray;
```
so this would mean the test file is `cloneArray.test.js`:
const cloneArray = require('./cloneArray');
```js
test('Properly clones array', () => {
    const arr = [1, 2, 3];
    expect(
        cloneArray(arr)
    ).toBe(arr);
});
```
but this would fail, because jest will say that both the arrays have the same value but they have diffreent memory addresses, so `toBe()` will fail, to overcome this use `toEqual()`, so:
```js
const cloneArray = require('./cloneArray');

test('Properly clones array', () => {
    const arr = [1, 2, 3];
    expect(
        cloneArray(arr)
    ).toEqual(arr);
    expect(
        cloneArray(arr)
    ).not.toBe(arr);
});
```
this passes because:
1. we are expecting the clonedArray to not to be the same array as our original, that is the same address in memory.
2. and we check values to be equal