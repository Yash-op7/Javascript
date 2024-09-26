# questions to revisit:
1. [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)
2. https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
3. https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
4. https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
5. https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
6. https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
- https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
- https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript
- https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

# mistakes made:
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
## 2. SyntaxError:
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
- use Promies.all([p1, p2]).then([x, y] => logic); it runs the promises in parallel.
- ❗️ when trying to cache using a map and an array or object of values, don't use the arr or obj as key since they are memory addresses and hence different arrays with same values will be considered different keys, instead use `JSON.stringify(arr/obj)` on the arrays and objects, basically,
    - ⭐️ cache by value not by reference (or container variable name)
    - ❗️ don't use `...` as Map's method only expect 1 or 2 arguements only, so using `...` will have unexpected outcomes and js won't throw an error which would make it difficult to debug.
- if we want to create a class with an object on which we can chain operations like this then:
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
```js
class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) {
            throw new Error('Division by zero is not allowed')
        }
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}
```

# Dom
## to append elements to a tag:
- element.append() - can take both string and elements
- element.appendChild() - can only take elements

## to create element;
```js
const body = document.body;
body.append('hello world');

// document.createElement(typeOfElement);
const div = document.createElement(typeOfElement);

div.innerText ='hello world';
div.textContent ='hello world';

body.append(div);
```