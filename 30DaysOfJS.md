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
div.innerHTML ='<strong>hello world</strong>';       // security concerns, but its the only way to edit the inner html, another way to achieve the same end goal is to break the process down:

const strongTag = document.createElement('strong');
strongTag.innerText='hello world';
div.append(strong); // more secure, same result


body.append(div);

div.remove(); // removes div completely from the html, but preserves it in the js code here.

// we can also do:
div.removeChild(span1); // if span1 is a child element inside the div, but just use remove();
```
## how to edit classes, attributes, styles
```js
// modifying attributes
let attr_value = div.getAttribute('id')
// if: <div id='heading'>ksf</div>
// then attr_value is `heading`
// or
// div1.id or div1.title work as well to access attributes of div1 element

similarly: div1.setAttribute('id', 'newId');
or
div1.id = 'newId';

also

div1.removeAttribute('id');

div1.classList.add('new-class');
div1.classList.remove('new-class');
div1.classList.toggle('new-class'); // combination fo add and remove
div1.classList.toggle('soem-class',  true/false);

// directly modify style:
div1.style.backgroundColor='red';       // convert the hyphen style to camelCase.
```
# js oops type coercion implicit methods:
## 1. `valueOf()` : returns whtatever arithmetic representation of the obj should be used in arith. expressions
## 2. `toString()`: returns whatever should String(obj) return.

# js regex:
Basic Syntax
You can define a RegEx pattern in two ways:

```js
const regex = /pattern/;
OR
const regex = new RegExp('pattern');
```
Common RegEx Components
/abc/: Matches the exact sequence "abc".
.: Matches any single character (except newline).
^: Anchors the match to the beginning of the string.
$: Anchors the match to the end of the string.
[abc]: Matches any one of the characters a, b, or c.
\d: Matches any digit (equivalent to [0-9]).
\w: Matches any word character (alphanumeric and underscore).
\s: Matches any whitespace character.
+: Matches one or more occurrences of the preceding character or group.
*: Matches zero or more occurrences.
?: Makes the preceding character or group optional (matches zero or one occurrence).
{n,m}: Matches between n and m occurrences of the preceding character or group.
- Flags (Modifiers)
Flags modify the behavior of the RegEx. They come after the closing slash or the second argument of RegExp:

g: Global match (find all matches, not just the first).
i: Case-insensitive match.
m: Multi-line mode.

## methods:
1. myRegex.test(string): Tests if a pattern exists in a string and returns true or false.ex:
```js
const regex = /^hello$/i;
const result = regex.test("Hello");
```


# 
Regular Expressions (RegEx) in JavaScript
Regular expressions (RegEx) are patterns used to match character combinations in strings. JavaScript provides a built-in RegExp object to work with RegEx, and it's widely used for tasks like searching, validating, extracting, and replacing text in strings.

1. Creating a Regular Expression
There are two ways to create a RegEx pattern in JavaScript:

Literal syntax:

js
Copy code
let regex = /pattern/flags;
Constructor syntax:

js
Copy code
let regex = new RegExp('pattern', 'flags');
2. RegEx Flags
Flags modify how the regular expression behaves. Here are the common flags:

g - global: match all occurrences instead of stopping after the first match.
i - ignore case: case-insensitive matching.
m - multiline: allows ^ and $ to match the start and end of lines.
s - dotall: allows . to match newline characters.
u - unicode: enables full Unicode matching.
y - sticky: matches only from the last index position in the target string.
3. Basic Syntax
Characters:
Literal characters like /abc/ match exactly "abc" in a string.
Special characters (like ., *, +, ?, etc.) have special meanings.
To match a special character literally, you escape it with a backslash (\), e.g., /\./ matches a dot (.).
4. Common Special Characters and Sequences
Character	Meaning
```
.	Any single character except newline
\d	Any digit (0-9)
\D	Any non-digit
\w	Any word character (alphanumeric + _)
\W	Any non-word character
\s	Any whitespace character (space, tab, etc.)
\S	Any non-whitespace character
\b	Word boundary
\B	Non-word boundary
^	Start of a string or line (in multiline mode)
$	End of a string or line (in multiline mode)
\	Escape character for special characters
```


methdos:
- match
- test
- search -> index
- replace
- split