// 1 reverse words in a string
// const str = 'abc def';
// const reversedWords = str.split(' ').map((word) => {
//     return word.split('').reverse().join('');
// });
// console.log(reversedWords.join(' '));   

// 2 check if array
// Array.isArray(value);

// 3 empty an array
// arr.length = 0;

// 4. check if integer 
// Number.isInteger(x)

// 5. Number(string) and num.toString()

// 6. palind
const isPalindrome = (s) => {
    return (s === (s.split('').reverse().join('')));
}

const func = (s) => {
    const words = s.split(' ');
    return words.map((x) => {
        return x[0].toUpperCase() + x.substr(1);
    }).join(' ');
}

console.log(func('a random flipping bird'));

const f = (s) => {
    let ans = new Map();
    for (let char of s) {
        if(ans.has(char)) {
            ans.set(char, ans.get(char) + 1);
        } else {
            ans.set(char, 1);
        }
    }
    return ans;
}
console.log(f('birdd'))

console.log(typeof null)