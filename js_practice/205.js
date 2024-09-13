// complete coutn vowels function

const str = 'HeY JS! YOu R AmAzinG';
const vowels = ['a', 'e', 'i', 'o' , 'u'];

function countVowels(data) {
    v = new Set(vowels);
return data.toLowerCase().split('').reduce((acc, x) => {
    if (v.has(x)) {
        return acc+1;
    } else {
        return acc;
    }
}, 0)
}   

console.log(countVowels(str));