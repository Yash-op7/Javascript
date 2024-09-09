
print = function(string) {
    console.log(string);
}

let arr = [1, 2, 3];
arr.push(4);  // Adds to end
arr.pop();    // Removes last element
x = arr.map(x => x * 2);        // [2, 4, 6] (maps to new array)
x = arr.filter(x => x > 1);     // [2, 3] (filters array)
x = arr.reduce((a, b) => a + b);  // 6 (reduces to single value)
print(x)
arr = [1, 2, 'bird']
print(arr)

