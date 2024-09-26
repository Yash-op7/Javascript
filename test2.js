let str = 'a<div>b<div>c<div>d<div>e<div>f<div>g';

let isInsideDiv = false;

let correctedString = [], segments = str.split('div');

for(let i=0;i<segments.length;i++) {
    if(isInsideDiv) {
        correctedString.push(segments[i]);
        correctedString.push('/div');
        isInsideDiv=false;
    } else {
        correctedString.push(segments[i]);
        correctedString.push('div');
        isInsideDiv=true;
    }
}
correctedString.pop();
let ans = correctedString.join('');
console.log(ans);
