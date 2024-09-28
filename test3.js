
var maximumTotalSum = function(a) {
  a.sort((a, b) => parseInt(a) - parseInt(b));
  let n = a.length;
  let taken = new Set();
  let ans = 0;
  let limit = 1e10;
console.log(a)
  for(let i =n-1;i>=0;i--) {
      a[i] = Math.min(limit-1, a[i]);
      console.log(i, a[i], limit)
      while(taken.has(a[i])) {
          a[i]--;
          if(a[i] === 0) return -1;
      }
      if(a[i] === 0) return -1;

      limit = a[i];
      ans += a[i];
      taken.add(a[i]);
  }
  return ans;
};

let a = [2, 2, 1];
console.log(maximumTotalSum(a))