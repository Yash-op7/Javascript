questions to revisit:
1. [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)
2. https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
3. https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript


mistakes made:
## ⭐️ 1. LogicError due to lack of presence of mind while using ternary: Easy to miss
```js
var expect = function(val) {
    return {
        toBe: function(val2) {
            return val === val2 ? true: new Error("Not Equal");
        },
        notToBe: function(val3) {
            return val !== val3 ? true: new Error("Equal");
        }
    }
};
```
- this code fails because in the false condition of the ternary instead of throwing the error, it return the error object.
- In JavaScript, to raise an error, you need to use the throw statement explicitly.
2. SyntaxError:
```js
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return {
        increment = () => ++count,
        decrement = () => --count,
        reset = () => {count = init; return init}
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```
- cannot use = operator to assign values inside an object.

# important points to remember:
- arr.map((val, index) => ...);
