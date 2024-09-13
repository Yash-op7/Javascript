const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

flatten = (list) => {
    let ans = [];
    for (let x of list) {
        if (typeof x == 'number') {
            ans = ans.concat(x);
        } else {
            const p = flatten(x);
            ans = ans.concat(p);
        }
    }
    return ans;
}

const a  =[1, 2];
const  b = [1, [1, 2], a, [[[3, 2],[4],[[[5, [[6]]]]]]]];
console.log(flatten(b));