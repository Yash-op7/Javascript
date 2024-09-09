let arr = [1, 2, 3];
arr.push(4);  // Adds to end
arr.pop();    // Removes last element
arr.map(x => x * 2);        // [2, 4, 6] (maps to new array)
arr.filter(x => x > 1);     // [2, 3] (filters array)
arr.reduce((a, b) => a + b);  // 6 (reduces to single value)